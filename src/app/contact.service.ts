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
    contacts.id = contacts.length;
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify({ contacts: contacts }));
  }
}
