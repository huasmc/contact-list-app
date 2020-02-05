import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Input() contact;
  @Input() index;
  modalShow = false;
  // showEditBool: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showModalHandler(event) {
    // this.backDropShow = true;
    this.modalShow = true;
    // this.router.navigate(['/contactList', this.index, 'edit']);
    // this.modalToShow.showModalHandler();
  }
  closeModalHandler(negativeFeedback) {
    // this.backDropShow = false;
    this.modalShow = negativeFeedback;
  }


}
