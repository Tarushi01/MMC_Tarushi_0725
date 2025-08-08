import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-west',
  imports: [NgFor],
  templateUrl: './west.html',
  styleUrl: './west.css'
})
export class West {

  office = [
    { city: 'Los Angeles', contactNo: '213-555-6789', email: 'la-west@company.com' },
    { city: 'San Francisco', contactNo: '415-555-4321', email: 'sf-west@company.com' },
    { city: 'Seattle', contactNo: '206-555-8765', email: 'seattle-west@company.com' },
    { city: 'Portland', contactNo: '503-555-3456', email: 'portland-west@company.com' },
    { city: 'San Diego', contactNo: '619-555-9876', email: 'sd-west@company.com' },
    { city: 'Las Vegas', contactNo: '702-555-6543', email: 'vegas-west@company.com' }
  ];

}
