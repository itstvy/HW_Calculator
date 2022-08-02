import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  toanTu = "";
  arr : string = "";
  x : string ="";
  y: string = "";
  constructor() { }

  calculate(input:any){
   
    switch(input){
      case "+":
        if(this.x == ""){
          this.x = this.arr;
          this.arr = "";
        }
        else if(this.x != ""){
          this.y = this.arr;
          this.arr = "";
        }
        this.toanTu = "+";
        break;
      case "-":
        if(this.x == ""){
          this.x = this.arr;
          this.arr = "";
        }
        else if(this.x != ""){
          this.y = this.arr;
          this.arr = "";
        }
        this.toanTu = "-";
        break;
      case "*":
        if(this.x == ""){
          this.x = this.arr;
          this.arr = "";
        }
        else if(this.x != ""){
          this.y = this.arr;
          this.arr = "";
        }
        this.toanTu = "*";
        break;
      case "/":
        if(this.x == ""){
          this.x = this.arr;
          this.arr = "";
        }
        else if(this.x != ""){
          this.y = this.arr;
          this.arr = "";
        }
        this.toanTu = "/";
        break;
      case "=":
        this.y = this.arr;
        this.arr = "";
        if(this.toanTu == "+"){
          this.arr = (parseFloat(this.x) + parseFloat(this.y)).toString();
          this.toanTu = "";
          this.x = this.arr;
        }
        else if(this.toanTu == "-"){
          this.arr = (parseFloat(this.x) - parseFloat(this.y)).toString();
          this.toanTu = "";
          this.x = this.arr;
        }
        else if(this.toanTu == "*"){
          this.arr = (parseFloat(this.x) * parseFloat(this.y)).toString();
          this.toanTu = "";
          this.x = this.arr;
        }
        else if(this.toanTu == "/"){
          this.arr = (parseFloat(this.x) / parseFloat(this.y)).toString();
          this.toanTu = "";
          this.x = this.arr;
        }
        break;
      case "AC":
        this.arr = "";
        this.x = "";
        this.y = "";
        break;
      default:
        this.arr+=input;
        break;
    }
    console.log(this.arr);
    if(this.arr == ""){
      return this.toanTu;
    }
    return this.arr;
  }
}
