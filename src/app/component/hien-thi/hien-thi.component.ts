import { Component, OnInit } from '@angular/core';
import {CalculateService} from 'src/app/services/calculate.service';

@Component({
  selector: 'app-hien-thi',
  templateUrl: './hien-thi.component.html',
  styleUrls: ['./hien-thi.component.scss']
})
export class HienThiComponent implements OnInit {

  constructor(private calculateservice: CalculateService) { }

  arr : string = "";

  ngOnInit(): void {
  }

  create(input:any){
    this.arr = this.calculateservice.calculate(input);
  }

}
