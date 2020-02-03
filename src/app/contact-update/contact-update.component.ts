import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {

  contact;
  numInputs: number = 0;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.contact = this.contactService.getContact(+params.get('contactId'));
      console.log(this.contact)
    })
  }

  addInput() {
    if (this.numInputs < 2) {
      this.numInputs++;
    }
  }

  removeInput() {
    if (this.numInputs > 0) {
      this.numInputs--;
    }
  }

  removeNumber() {
    this.contact.phoneBook.setMobileNumber(null);
    this.removeInput();
  }

  formatNumber(number) {
    return number.replace(/[^\d]+/g, '')
    .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }

  onSubmitUpdate() {
    if(this.contact.phoneBook.mobileNumber) {
      this.contact.phoneBook.mobileNumber =  this.formatNumber(this.contact.phoneBook.mobileNumber);
    } else if(this.contact.phoneBook.houseNumber) {
      this.contact.phoneBook.houseNumber =  this.formatNumber(this.contact.phoneBook.houseNumber);
    }

    console.log(this.contact);
    this.contactService.updateContact(this.contact);
    this.router.navigate(['/contacts/', this.contact.id])
  }

  onSubmitDelete() {
    this.contactService.removeContact(this.contact.id);
    this.router.navigate(['/']);
  }
}
