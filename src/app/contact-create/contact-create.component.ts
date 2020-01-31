import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  createContactForm;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
    ) {
 }

  ngOnInit() {
      this.createContactForm = this.formBuilder.group({
        name: '',
        number: '',
        email: ''
    })
    var contact = { "name": "Test", "number": "809-545-4067" };
    this.contactService.addContact(contact);
    
  }

  onSubmit(contactDate) {
    console.warn(contactDate);
  }
}
