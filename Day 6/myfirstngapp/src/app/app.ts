import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal("myfirstngapp");
  FirstName = "Tarushi";
  LastName = "Marchino";
  Age = 22;
  Gender = "Female";
  Email = "tarushimarchino@example.com";
  hobbies=['coding','reading','watching movies','sleeping'];


greetUser(){
  return "Hello" + this.FirstName;
}
addhobby(hobby:string){
  this.hobbies.push(hobby);
}
}