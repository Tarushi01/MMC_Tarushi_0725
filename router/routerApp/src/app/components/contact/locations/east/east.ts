import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-east',
  imports: [NgFor],
  templateUrl: './east.html',
  styleUrl: './east.css'
})
export class East {

  office = [
    { city: 'New York', contactNo: '212-555-1234', email: 'ny-east@company.com' },
    { city: 'Boston', contactNo: '617-555-5678', email: 'boston-east@company.com' },
    { city: 'Philadelphia', contactNo: '215-555-9012', email: 'philly-east@company.com' },
    { city: 'Atlanta', contactNo: '404-555-3456', email: 'atlanta-east@company.com' },
    { city: 'Charlotte', contactNo: '704-555-7890', email: 'charlotte-east@company.com' },
    { city: 'Miami', contactNo: '305-555-2345', email: 'miami-east@company.com' }
  ];
}
