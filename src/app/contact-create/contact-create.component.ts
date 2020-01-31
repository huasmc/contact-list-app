import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  createContactForm;

  constructor(
    private formBuilder: FormBuilder
    ) {
    this.createContactForm = this.formBuilder.group({
      name: '',
      number: '',
      email: ''
  })
 }

  ngOnInit() {
 
  }

}
