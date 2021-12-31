import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  title = 'Calculator';
  num1!: number;
  num2!: number;
  arr: Array<number> = [];
  operation: string = '';
  count: number = 0;
  input:string = ''

  


  constructor() { }

  ngOnInit(): void {

  }

  num(val: string) {
    if (this.count === 0) {
      this.num1 = (parseInt(val));
      this.arr.push(this.num1);
      console.log(this.arr)
      this.input += this.num1
      return this.arr;
    }
    else {
      this.num2 = parseInt(val)
      this.arr.push(this.num2)
      console.log(this.arr)
      this.input += this.num2
    }
    return this.arr;
  }
  operator(op: string) {
    this.operation= op; 
    this.num1 = parseInt(this.arr.join(''));
    console.log(this.num1)
    this.arr = [];
    this.count++
    this.input += this.operation

  }
  equal() {
    this.num2 = parseInt(this.arr.join(''))
    this.input += this.num2
    console.log('number 1:'+ this.num1,'number 2:'+ this.num2);
    let calculation = this.calculate(this.num1, this.num2, this.operation)
    console.log(calculation)
    this.input = calculation.toString()
  }


  clear() {
    this.num1 = 0;
    this.num2 = 0;
    this.arr = []
    this.input = ''
  }


calculate(num1: Number, num2: Number, operator: string): number {
  let total:number = 0;
  // console.log(num1,num2,operator)

  switch (operator) {

    case '+':
      total = +num1 + +num2;
      // break;
      return total;

    case '-':
      total = +num1 - +num2;
      // break;
      return total;
    case '*':
      total = +num1 * +num2;
      // break;
      return total;
    case '/':
      total = +num1 / +num2;
      // break;
      return total;
  }
  return total;

}
}