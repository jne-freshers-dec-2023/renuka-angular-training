import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  input1: string | undefined;
  getValue1(input:any){
    this.input1=input;
    console.log(this.input1)
  }
  input2: string | undefined;
  getValue2(input:any){
    this.input2=input;
    console.log(this.input2)
  }
  operator='';
  getOp(op:any){
    this.operator=op;
    console.log(op)
  }
  op=''
  result:number | undefined
  formula:string=''
  calculate(){
    this.formula = this.input1+ this.operator+this.input2
    this.result=eval(this.formula)
    this.op= "="
  }
}
