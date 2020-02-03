import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';
import { ModalComponent } from './modal/modal.component';
import { ContactComponent } from './contact/contact.component';
import { BackdropComponent } from './backdrop/backdrop.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ContactListComponent,
    ContactCreateComponent,
    ContactDetailsComponent,
    ContactUpdateComponent,
    ModalComponent,
    ContactComponent,
    BackdropComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ContactListComponent },
      { path: 'create', component: ContactCreateComponent },
      { path: 'contacts/:contactId', component: ContactDetailsComponent },
      { path: 'contacts/update/:contactId', component: ContactUpdateComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
