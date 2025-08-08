import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-south',
  imports: [NgFor],
  templateUrl: './south.html',
  styleUrl: './south.css'
})
export class South {

  office = [
    { city: 'Houston', contactNo: '713-555-2345', email: 'houston-south@company.com' },
    { city: 'Dallas', contactNo: '214-555-6789', email: 'dallas-south@company.com' },
    { city: 'Austin', contactNo: '512-555-4321', email: 'austin-south@company.com' },
    { city: 'San Antonio', contactNo: '210-555-8765', email: 'sa-south@company.com' },
    { city: 'Tampa', contactNo: '813-555-3456', email: 'tampa-south@company.com' },
    { city: 'Orlando', contactNo: '407-555-9876', email: 'orlando-south@company.com' }
  ];

}
