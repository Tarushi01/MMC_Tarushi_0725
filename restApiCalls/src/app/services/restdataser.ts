import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Restdataser {
  postdata_fromweb: any;
  productdata_fromweb: any; // ✅ Declare this

  constructor(private _http: HttpClient) {}

  getPostData() {
    this._http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
      (res: any) => {
        this.postdata_fromweb = res;
        console.log("Posts:", this.postdata_fromweb);
      },
      (err) => {
        console.error('Error fetching posts:', err);
      }
    );
  }

  getProductData() {
    this._http.get("https://fakestoreapi.com/products").subscribe(
      (res: any) => {
        this.productdata_fromweb = res;
        console.log("Products:", this.productdata_fromweb);
      },
      (err) => {
        console.error('Error fetching products:', err);
      }
    );
  }
}
