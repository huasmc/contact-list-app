import { Injectable } from '@angular/core';

import { Contact } from '../models/contact'

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  getContacts(): Contact[] {
    let localStorageContacts = JSON.parse(localStorage.getItem('contacts'));
    var contacts = []
    if (localStorageContacts !== null) {
      contacts = localStorageContacts["contacts"]
        .filter((contact) => contact !== undefined && contact !== null)
        .map((contact: Contact) => {
          return new Contact().deserialize(contact);
        }).sort(function(a, b){
          var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
          if (nameA < nameB) //sort string ascending
              return -1 
          if (nameA > nameB)
              return 1
          return 0 //default return value (no sorting)
      })
    }
    return contacts === null ? [] : contacts;
  }

  getContact(id: number): Contact {
    let contacts = this.getContacts();
    return new Contact().deserialize(contacts[id]);
  }

  addContact(contact): void {
    let contacts = this.getContacts();
    var key = contacts.length;
    contacts[key] = contact
    contact.id = key;
    localStorage.setItem('contacts', JSON.stringify({ contacts: contacts }));
  }

  updateContact(id, contact): void {
    let contacts = this.getContacts();
    contacts[id] = contact;
    localStorage.setItem('contacts', JSON.stringify({ contacts: contacts }));
  }

  removeContact(id): void {
    let contacts = this.getContacts();
    delete contacts[id];
    localStorage.setItem('contacts', JSON.stringify({ contacts: contacts }));
  }
}
