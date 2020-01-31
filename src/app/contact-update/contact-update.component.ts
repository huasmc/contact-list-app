import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {

  contact;
  updateForm;
  contacts;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();

    this.route.paramMap.subscribe(params => {
      this.contact = this.contacts[+params.get('contact')];
    })
  }

}
