import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Greetings {
  cartValue = 0;
  developerName = 'TARUSHI';
  greetings()
  {
    alert ('HELLO AND WELCOME TO OUR STORE ' + this.developerName)
  }

  addToCart(){
    this.cartValue = this.cartValue + 1 ;
  }
  
}
