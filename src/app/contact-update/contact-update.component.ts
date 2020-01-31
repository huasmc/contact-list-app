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

  id;
  contact;
  updateForm;
  contacts;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) {
    this.contacts = this.contactService.getContacts();
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.contact = this.contacts[+params.get('contact')];
      this.id = +params.get('contactId')
    })
  }

  onSubmit() {
    console.log(this.id)
    this.contactService.update(this.id, this.contact);
    this.router.navigate(['/contacts/', this.id])
  }
}
