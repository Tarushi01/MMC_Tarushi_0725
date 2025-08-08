import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Contactus } from './components/contactus/contactus';
import { StockPortfolio } from './components/stock-portfolio/stock-portfolio';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home,Contactus,StockPortfolio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('banking_system');
}
