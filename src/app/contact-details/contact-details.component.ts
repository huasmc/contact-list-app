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

  @Input() contact;
  Object = Object;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private location: Location
  ) { }

  ngOnInit() {    
    this.route.paramMap.subscribe(params => {
      this.contact = this.contactService.getContact(+params.get('contactId'));
    })
  }

  goBack(): void {
    console.log(this.contact.getPhoneBook().getNumbers())
    this.location.back();
  }

}
