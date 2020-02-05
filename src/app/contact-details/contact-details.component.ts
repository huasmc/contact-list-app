import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Location } from '@angular/common';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.contact = this.contactService.getContact(+params.get('contactId'));
      this.id = +params.get('contactId');
    })
  }

  goBack(): void {
    this.location.back();
  }

}
