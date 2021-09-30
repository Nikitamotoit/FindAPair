import {Component, OnInit} from '@angular/core';

export interface StatusCard{
  srcImages:string
  numImage: number
  btnClick: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FindAPair'
  firstCard! : StatusCard
  numCard = 0

  images: StatusCard[] = []

  CheckCard(card: StatusCard){
    if (this.numCard === 0) {
      this.numCard = card.numImage
      this.firstCard = card
    } else {
      if (this.numCard !== card.numImage){
        card.btnClick = ""
        this.firstCard.btnClick = ""
      } else {
        this.images = this.images.filter((item) => item.numImage !== card.numImage)
        this.images = this.images.filter((item) => item.numImage !== this.numCard)
      }
      this.numCard = 0
    }
  }



  GenCard() {
    let randNum = Math.floor(Math.random() * (10 - 1) + 1)
    while (randNum > 0) {
      let numCard = Math.floor(Math.random() * (10 - 2) + 2)
      if (!this.images.some(i => i.numImage === numCard)){
        this.images.push({srcImages: "assets/images/card" + numCard + ".svg", numImage: numCard, btnClick: ""})
        this.images.push({srcImages: "assets/images/card" + numCard + ".svg", numImage: numCard, btnClick: ""})
      }
      randNum --
    }
    this.images.sort(() => Math.round(Math.random() * 100) - 50);
    this.images.sort(() => Math.round(Math.random() * 100) - 50);
    this.images.sort(() => Math.round(Math.random() * 100) - 50);

  }

  ngOnInit(){
    this.GenCard()
  }
}
