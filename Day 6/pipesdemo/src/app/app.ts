import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingsPipe } from './pipes/greetings-pipe';
import { GendergreetingPipe } from './pipes/gendergreeting-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UpperCasePipe, LowerCasePipe, CurrencyPipe, JsonPipe, DatePipe, GreetingsPipe, GendergreetingPipe, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipesdemo');
  firstName = 'Tarushi';
  lastName = 'Marchino';
  salary = 1000;
  product = {pId: 101, pName: 'Laptop',price:50000, pIsInStock:true};
  orderData = new Date();
  employeeList = [
    { empNo: 1, empName: 'Alice Johnson', empDesignation: 'Developer', empGender: 'Female', empSalary: 75000, empIsPermanent: true },
    { empNo: 2, empName: 'Bob Smith', empDesignation: 'Designer', empGender: 'Male', empSalary: 68000, empIsPermanent: false },
    { empNo: 3, empName: 'Charlie Davis', empDesignation: 'Project Manager', empGender: 'Male', empSalary: 95000, empIsPermanent: true },
    { empNo: 4, empName: 'Diana Prince', empDesignation: 'QA Engineer', empGender: 'Female', empSalary: 72000, empIsPermanent: true },
    { empNo: 5, empName: 'Ethan Hunt', empDesignation: 'DevOps Engineer', empGender: 'Male', empSalary: 88000, empIsPermanent: false },
    { empNo: 6, empName: 'Fiona Gallagher', empDesignation: 'HR Manager', empGender: 'Female', empSalary: 67000, empIsPermanent: true },
    { empNo: 7, empName: 'George Miller', empDesignation: 'Business Analyst', empGender: 'Male', empSalary: 73000, empIsPermanent: true },
    { empNo: 8, empName: 'Hannah Lee', empDesignation: 'UI/UX Designer', empGender: 'Female', empSalary: 71000, empIsPermanent: false },
    { empNo: 9, empName: 'Ian Wright', empDesignation: 'Technical Lead', empGender: 'Male', empSalary: 99000, empIsPermanent: true },
    { empNo: 10, empName: 'Julia Roberts', empDesignation: 'Support Engineer', empGender: 'Female', empSalary: 65000, empIsPermanent: false }
  ];
}
