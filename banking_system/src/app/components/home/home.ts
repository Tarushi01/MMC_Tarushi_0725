import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  services: string[] = [
    'Account Management',
    'Fund Transfers',
    'Loan Applications',
    'Credit Card Services',
    'Investment Options',
    'Customer Support'
  ];

}
