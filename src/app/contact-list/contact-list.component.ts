import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    localStorage.clear()
    this.tempContact();
    this.contacts = this.contactService.getContacts();
  }

  tempContact() {
    var contacts = [
      {"name": "Lluffy", "number": "809-545-4067" }, 
      {"name": "Luna", "number": "809-532-7293" }
  ]
    localStorage.setItem('contacts', JSON.stringify({ contacts: contacts}));
  }

}
