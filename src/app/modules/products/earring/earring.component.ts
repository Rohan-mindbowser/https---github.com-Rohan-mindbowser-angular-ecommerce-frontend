import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-earring',
  templateUrl: './earring.component.html',
  styleUrls: ['./earring.component.scss']
})
export class EarringComponent implements OnInit {

  constructor() { }
  @Input() products!:[];
  earringProducts!:any
  ngOnInit(): void {
    this.earringProducts = this.products
  }

}
