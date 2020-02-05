import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css']
})
export class BackdropComponent {

  @Input() backDropShow;
  @Output() sendBackDropClose = new EventEmitter<boolean>();

  closeBackDropHandler(event) {
    this.sendBackDropClose.emit(false);
  }

}
