import { Component, OnInit } from '@angular/core';
import { contacts } from '../assets/data/contacts.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'contact-list';

  ngOnInit() {
    localStorage.setItem('contacts', JSON.stringify({ 'contacts': contacts }));

  }
}
