import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  id;
  contact;
  contacts;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {
    this.contacts = this.contactService.getContacts();
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.contact = this.contacts[+params.get('contactId')];
      this.id = +params.get('contactId')
      console.log(this.id)
    })
  }

}
