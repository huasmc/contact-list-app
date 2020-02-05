import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts;

  constructor(
    private contactService: ContactService
  ) {
  }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contacts = this.contactService.getContacts();
  }
}
