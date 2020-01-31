import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private contactService: ContactService,
    private router: Router
  ) {
    this.contacts = this.contactService.getContacts();
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.contact = this.contacts[+params.get('contactId')];
      this.id = +params.get('contactId')
    })
  }

  onSubmitUpdate() {
    this.contactService.updateContact(this.id, this.contact);
    this.router.navigate(['/contacts/', this.id])
  }

  onSubmitDelete() {
    this.contactService.removeContact(this.id);
  }
}
