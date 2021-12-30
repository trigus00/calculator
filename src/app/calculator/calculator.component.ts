import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  input:string  = '';

  constructor() { }

  ngOnInit(): void {
  }
num(num:string){
  if (num=="0") {
    if (this.input==""){
      return;
    }
    const PrevKey = this.input[this.input.length - 1];
    if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+')  {
        return;
    }
  }
  this.input = this.input + num
    this.calcAnswer();
  }
  getLastOperand() {
    let pos:number;
    console.log(this.input)
    pos=this.input.toString().lastIndexOf("+")
    if (this.input.toString().lastIndexOf("-") > pos) pos=this.input.lastIndexOf("-")
    if (this.input.toString().lastIndexOf("*") > pos) pos=this.input.lastIndexOf("*")
    if (this.input.toString().lastIndexOf("/") > pos) pos=this.input.lastIndexOf("/")
    console.log('Last '+this.input.substr(pos+1))
    return this.input.substr(pos+1)
  }
  operator(op:string){
    
  }
  calcAnswer(){

  }
  clear(){
    this.input = ''
  }
}

