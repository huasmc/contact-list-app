import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts() {
    let localStorageContacts = JSON.parse(localStorage.getItem('contacts'));
    return localStorageContacts == null ? [] : localStorageContacts.contacts;
  }

  addContact(contact) {
    let contacts = this.getContacts();
    var key = contacts.length;
    contacts[key] = contact
    localStorage.setItem('contacts', JSON.stringify({ contacts }));
  }

  updateContact(id, contact) {
    let contacts = this.getContacts();
    contacts[id] = contact;
    localStorage.setItem('contacts', JSON.stringify({ contacts }));
    // for (var i = 0; i < contacts.length; i++ ) {
    //   if( contacts[i].name = contact.id ) {
    //     contacts[i].name = contact.name;
    //     contact[i].number = contact.number;
    //     contact[i].description = contact.description;
    //   }
    // }
  }

  removeContact(id) {
    let contacts = this.getContacts();
    delete contacts[id];
    localStorage.setItem('contacts', JSON.stringify({ contacts }));
  }
}
