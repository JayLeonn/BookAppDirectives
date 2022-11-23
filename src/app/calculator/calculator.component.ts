import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  constructor() {}

  data1: string = 'Hello1';
  data2: string = 'Hello2';
  data3: string = 'Hello3';
  change() {
    this.data1 = 'Hi1';
    this.data2 = 'Hi2';
    this.data3 = 'Hi3';
  }

  ngOnInit(): void {}
}
