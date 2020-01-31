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
}
