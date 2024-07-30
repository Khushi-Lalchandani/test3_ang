import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showForm = false;
  profileName: string = 'John';
  email: string = 'john@gmail.com';
  pNo: number = 1211232423;
  age: number = 30;
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  constructor() {}
  ngOnInit() {}
}
