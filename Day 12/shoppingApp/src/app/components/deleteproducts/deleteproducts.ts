import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-deleteproducts',
  templateUrl: './deleteproducts.html',
  standalone: true,
  styleUrls: ['./deleteproducts.css'],
  imports : [FormsModule, CommonModule],
})
export class Deleteproducts {
  productId: string = '';

  constructor(private productService: ProductService) {}

  deleteProduct() {
    this.productService.deleteProduct(this.productId).subscribe(() => {
      alert('Product deleted!');
    });
  }
}
