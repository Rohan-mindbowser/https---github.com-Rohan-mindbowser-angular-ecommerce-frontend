import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-necklace',
  templateUrl: './necklace.component.html',
  styleUrls: ['./necklace.component.scss']
})
export class NecklaceComponent implements OnInit {

  constructor() { }
  @Input() products!:[];
  necklaceProducts!:any

  ngOnInit(): void {
    this.necklaceProducts = this.products;
  }

}
