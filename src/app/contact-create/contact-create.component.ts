import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  createContactForm;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private router: Router,
    ) { }

  ngOnInit() {
      this.createContactForm = this.formBuilder.group({
        name: '',
        number: '',
        email: ''
    })
  }

  onSubmit(contactData) {
    this.contactService.addContact(contactData);
    this.router.navigate(['/']);
  }
}
