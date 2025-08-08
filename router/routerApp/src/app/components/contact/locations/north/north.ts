import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-north',
  imports: [NgFor],
  templateUrl: './north.html',
  styleUrl: './north.css'
})
export class North {

  office = [
    { city: 'Chicago', contactNo: '312-555-7890', email: 'chicago-north@company.com' },
    { city: 'Detroit', contactNo: '313-555-1234', email: 'detroit-north@company.com' },
    { city: 'Minneapolis', contactNo: '612-555-5678', email: 'mpls-north@company.com' },
    { city: 'Milwaukee', contactNo: '414-555-9012', email: 'milwaukee-north@company.com' },
    { city: 'Cleveland', contactNo: '216-555-3456', email: 'cleveland-north@company.com' },
    { city: 'Buffalo', contactNo: '716-555-7890', email: 'buffalo-north@company.com' }
  ];

}
