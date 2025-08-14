import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.html',
  standalone: true,
  styleUrls: ['./updateproducts.css'],
  imports : [FormsModule, CommonModule],
})
export class Updateproducts {
  product = {
    _id: '',
    pNmae: '',
    pPrice: 0,
    pBrand: '',
    pIsInStock: ''
  };

  constructor(private productService: ProductService) {}

  updateProduct() {
    this.productService.updateProduct(this.product._id, this.product).subscribe(() => {
      alert('Product updated!');
    });
  }
}
