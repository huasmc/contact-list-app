import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';

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
    if (this.numInputs < 2) {
      this.numInputs++;
    }
  }

  removeInput() {
    if (this.numInputs > 0) {
      this.numInputs--;
    }
  }

  onSubmit(contactData) {
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
