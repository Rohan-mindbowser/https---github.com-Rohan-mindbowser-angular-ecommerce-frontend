import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bracelet',
  templateUrl: './bracelet.component.html',
  styleUrls: ['./bracelet.component.scss']
})
export class BraceletComponent implements OnInit {

  constructor() { }

  @Input() products!:[];

  braceletProducts!:any

  ngOnInit(): void {
    console.log("From child :",this.products);
    this.braceletProducts = this.products
  }

}
