import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

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
  numInputs;
  Object = Object;

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
    this.numInputs = this.contactService.getNumbers(this.contact).length - 1;
  }

  removeNumber(numberId) {
    console.log(numberId)
    this.contactService.removeNumber(this.id, numberId);
    this.router.navigate(['/contacts/', this.id]);
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
