import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  createContactForm;
  numInputs: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private router: Router,
  ) { }

  counter(i: number) {
    return new Array(i);
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

  ngOnInit() {
    this.createContactForm = this.formBuilder.group({
      name: '',
      email: '',
      numbers: this.formBuilder.group({ // make a nested group
        0: '',
        1: '',
        2: '',
      }),
    })
  }

  onSubmit(contactData) {
    this.contactService.addContact(contactData);
    this.router.navigate(['/']);
  }
}
