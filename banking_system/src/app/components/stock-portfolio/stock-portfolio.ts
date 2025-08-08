import { CurrencyPipe, NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-stock-portfolio',
  imports: [NgFor, NgClass, CurrencyPipe],
  templateUrl: './stock-portfolio.html',
  styleUrl: './stock-portfolio.css'
})
export class StockPortfolio {
  stockList = [
    { stockId: '1', qty: 10, purchasePrice: 150, currentPrice: 170 },
    { stockId: '2', qty: 5, purchasePrice: 1200, currentPrice: 1180 },
    { stockId: '3', qty: 8, purchasePrice: 250, currentPrice: 260 },
    { stockId: '4', qty: 12, purchasePrice: 700, currentPrice: 680 },
    { stockId: '5', qty: 3, purchasePrice: 3300, currentPrice: 3400 },
    { stockId: '6', qty: 6, purchasePrice: 500, currentPrice: 480 },
    { stockId: '7', qty: 15, purchasePrice: 200, currentPrice: 210 },
    { stockId: '8', qty: 7, purchasePrice: 300, currentPrice: 290 },
    { stockId: '9', qty: 20, purchasePrice: 50, currentPrice: 55 },
    { stockId: '10', qty: 10, purchasePrice: 130, currentPrice: 125 }
  ].map(stock => {
    const invested = stock.qty * stock.purchasePrice;
    const current = stock.qty * stock.currentPrice;
    const status = invested > current ? 'Loss' : 'Profit';
    return { ...stock, invested, current, status };
  });
 
  get totalInvestment(): number {
    return this.stockList.reduce((sum, stock) => sum + stock.invested, 0);
  }
 
  get portfolioValue(): number {
    return this.stockList.reduce((sum, stock) => sum + stock.current, 0);
  }
 
  get overallStatus(): string {
    return this.totalInvestment > this.portfolioValue ? 'Loss' : 'Profit';
  }
}