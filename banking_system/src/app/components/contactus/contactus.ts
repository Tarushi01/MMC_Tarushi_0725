import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  imports: [NgFor],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css'
})
export class Contactus {
  contactList = [
    { officeName: 'Powai', contactNo: '+91-22-12345678', email: 'powai@bank.com' },
    { officeName: 'Pune', contactNo: '+91-20-87654321', email: 'pune@bank.com' },
    { officeName: 'Cyberhub', contactNo: '+91-124-33445566', email: 'cyberhub@bank.com' },
    { officeName: 'New Jersey', contactNo: '+1-732-123-4567', email: 'newjersey@bank.com' },
    { officeName: 'Paris', contactNo: '+33-1-23456789', email: 'paris@bank.com' },
    { officeName: 'Berlin', contactNo: '+49-30-98765432', email: 'berlin@bank.com' },
    { officeName: 'Tokyo', contactNo: '+81-3-1234-5678', email: 'tokyo@bank.com' },
    { officeName: 'Sydney', contactNo: '+61-2-87654321', email: 'sydney@bank.com' },
    { officeName: 'Toronto', contactNo: '+1-416-555-1234', email: 'toronto@bank.com' },
    { officeName: 'Dubai', contactNo: '+971-4-1234567', email: 'dubai@bank.com' }
  ];

}
