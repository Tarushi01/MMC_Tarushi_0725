import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  imports : [CommonModule],
})
export class Products implements OnInit{
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
