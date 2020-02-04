import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';
import { FormatterService } from '../services/formatter.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  createContactForm: FormGroup;
  numInputs: number = 0;
  @Input() contact;
  @Input() index;
  @Output() sendModalClose = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private router: Router,
    private formatter: FormatterService
  ) { }

  ngOnInit() {
    this.createContactForm = this.formBuilder.group({
      name: '',
      email: '',
      phoneBook: this.formBuilder.group({ // make a nested group
        houseNumber: '',
        mobileNumber: '',
      }),
    })
  }

  addInput() {
    if (this.numInputs !== 1) {
      this.numInputs++;
    }
  }

  removeInput() {
    if (this.numInputs > 0) {
      this.numInputs--;
    }
  }


  formatContactData(contactData) {
    if (contactData.phoneBook.mobileNumber) {
      contactData.phoneBook.mobileNumber = this.formatter.formatNumber(contactData.phoneBook.mobileNumber.toString());
    } 
    if (contactData.phoneBook.houseNumber) {
      contactData.phoneBook.houseNumber = this.formatter.formatNumber(contactData.phoneBook.houseNumber.toString());

    }
  }

  onSubmit(contactData) {
    this.formatContactData(contactData);
    if (contactData.invalid) {
      console.log(contactData.invalid);
      return;
    }
    this.contactService.addContact(contactData);
    this.sendModalClose.emit(false);
    this.createContactForm.reset();
    this.router.navigateByUrl('/create', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/']);
    });

  }
}
