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
  numInputs: number = 0;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();

    this.route.paramMap.subscribe(params => {
      this.contact = this.contacts[+params.get('contactId')];
      this.id = +params.get('contactId')
    })
  }

  counter(i: number) {
    return new Array(i);
  }

  addInput() {
    if(this.numInputs < 2) {
      this.numInputs++;
    }
  }

  onSubmitUpdate() {
    this.contactService.updateContact(this.id, this.contact);
    this.router.navigate(['/contacts/', this.id])
  }

  onSubmitDelete() {
    this.contactService.removeContact(this.id);
    this.router.navigate(['/']);
  }
}
