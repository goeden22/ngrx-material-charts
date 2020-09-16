import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-charts-entry',
  templateUrl: './charts-entry.component.html',
  styleUrls: ['./charts-entry.component.scss']
})
export class ChartsEntryComponent implements OnInit {
  @Input() percentTest: string


  circ: number;
  offset: number;
  radius: number;
  percent: string;
  strokeDashoffset : number;
  strokeDasharray: string;
  

  constructor() {
    this.radius = 71;
    
  }

  ngOnInit(): void {
    this.percent = this.percentTest;
    this.calculateOffset();
  
  }

  calculateOffset(){
    let circ = Math.floor(this.radius * 3.14 * 2)
    let offset = circ - (parseInt(this.percent) / 100) * circ;
    console.log(offset)
   
    this.strokeDasharray = `${circ} ${circ}`
    this.strokeDashoffset = offset
   
  }

}
