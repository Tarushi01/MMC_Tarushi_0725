import { Component } from '@angular/core';
import { Restdataser } from '../../services/restdataser';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [NgFor],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
   constructor(public _restdataser: Restdataser) {}

  ngOnInit() {
    this._restdataser.getProductData();
  }
  
}
