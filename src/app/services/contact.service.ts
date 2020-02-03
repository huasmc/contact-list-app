import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Contact } from '../models/contact'
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(): Contact[] {
    let localStorageContacts = JSON.parse(localStorage.getItem('contacts'));
    var contacts = []
    if(localStorageContacts !== null ) {
      contacts = localStorageContacts["contacts"]
      .map((contact: Contact) => {
        if(contact !== null) {
          return new Contact().deserialize(contact);
        }
      });
    }
    return contacts === null ? [] : contacts;
  }

  getContact(id: number): Contact {
    let contacts = this.getContacts();
    return new Contact().deserialize(contacts[id]);
  }

  addContact(contact) {
    let contacts = this.getContacts();
    var key = contacts.length;
    contacts[key] = contact
    localStorage.setItem('contacts', JSON.stringify({ contacts: contacts }));
  }

  updateContact(id, contact) {
    let contacts = this.getContacts();
    contacts[id] = contact;
    localStorage.setItem('contacts', JSON.stringify({ contacts: contacts }));
  }

  removeContact(id) {
    let contacts = this.getContacts();
    delete contacts[id];
    localStorage.setItem('contacts', JSON.stringify({ contacts: contacts }));
  }

  getNumbers(contact) {
    let numbers = [];
    let numObject = contact.numbers;
    for(let key in contact.numbers) {
      if (numObject[key]) {
        numbers.push(numObject[key]);
      }
    }
    return numbers;
  }

  // removeNumber(contactId, numberId) {
  //   let contacts = this.getContacts();
  //   delete contacts[contactId].numbers[numberId];
  //   localStorage.setItem('contacts', JSON.stringify({ contacts: contacts }));
  // }
}
