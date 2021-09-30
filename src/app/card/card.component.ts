import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StatusCard} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  image!: StatusCard

  @Output() childEvent = new EventEmitter();
  BtnOnClick(){
    this.image.btnClick = "active"
    setTimeout(() =>
      {
        this.childEvent.emit(this.image)
      },
      700);
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.image.srcImages)
  }

}
