import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  id;
  @Input() contact;
  contacts;
  Object = Object;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private location: Location
  ) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    
    this.route.paramMap.subscribe(params => {
      this.contact = this.contacts[+params.get('contactId')];
      this.id = +params.get('contactId');
    })
  }

  goBack(): void {
    this.location.back();
  }

}
