import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      // { path: '', component: },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
