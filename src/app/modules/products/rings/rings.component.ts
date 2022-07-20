import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.scss']
})
export class RingsComponent implements OnInit {

  constructor() { }
  @Input() products!:[];
  ringProducts!:any

  ngOnInit(): void {
    this.ringProducts = this.products;
  }

}
