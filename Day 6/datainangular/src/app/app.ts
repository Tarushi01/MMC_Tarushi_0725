import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  appName: string = "Introduction to data in angular";
  type_of_data: string[] = [
    'Primitive data type',
    'Primitive data array',
    'Json Object',
    'Array of json object'
  ];

  productDetails = {pId:101,pName:'Pepsi',pPrice:100,pQty:2,pCategory:'SoftDrink'}

  productList = [
  { pId: 201, pName: 'iPhone ', pPrice: 999, pQty: 5, pCategory: 'Smartphone' },
  { pId: 202, pName: 'Samsung Galaxy', pPrice: 849, pQty: 8, pCategory: 'Smartphone' },
  { pId: 203, pName: 'Google Pixel', pPrice: 699, pQty: 10, pCategory: 'Smartphone' },
  { pId: 204, pName: 'OnePlus ', pPrice: 729, pQty: 6, pCategory: 'Smartphone' },
  { pId: 205, pName: 'Xiaomi Mi ', pPrice: 599, pQty: 12, pCategory: 'Smartphone' },
  { pId: 206, pName: 'Motorola Edge ', pPrice: 649, pQty: 7, pCategory: 'Smartphone' },
  { pId: 207, pName: 'Sony', pPrice: 799, pQty: 4, pCategory: 'Smartphone' },
  { pId: 208, pName: 'Asus ROG ', pPrice: 999, pQty: 3, pCategory: 'Smartphone' },
  { pId: 209, pName: 'Realme', pPrice: 579, pQty: 9, pCategory: 'Smartphone' },
  { pId: 210, pName: 'Honor Magic', pPrice: 899, pQty: 5, pCategory: 'Smartphone' }
];

}

