import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import contacts from '../../assets/data/contacts.json';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts ;

  constructor(
    private contactService: ContactService
  ) {
    localStorage.setItem( 'contacts', JSON.stringify( contacts ));
   }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contacts = this.contactService.getContacts();
  }
}
