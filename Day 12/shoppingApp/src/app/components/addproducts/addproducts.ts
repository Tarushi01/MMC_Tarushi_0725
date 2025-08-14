import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.html',
  standalone: true, 
  styleUrls: ['./addproducts.css'],
  imports : [ FormsModule, CommonModule],
})
export class Addproducts {
  product = {
  _id: '',
  pNmae: '',
  pPrice: 0,
  pBrand: '',
  pIsInStock: '',
};


  constructor(private productService: ProductService) {}

  addProduct() {
    this.productService.addProduct(this.product).subscribe(() => {
      alert('Product added!');
    });
  }
}
