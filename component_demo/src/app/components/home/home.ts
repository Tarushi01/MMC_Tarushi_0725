import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  ourServices = ['Insurance','Brokerage','Risk Management','Investment Advisor','Assest Management','Finanace','Funds','Consultancy']
}
