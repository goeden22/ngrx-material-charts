import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-charts-entry',
  templateUrl: './charts-entry.component.html',
  styleUrls: ['./charts-entry.component.scss']
})
export class ChartsEntryComponent implements OnInit {
  @Input() sum: number
  @Input() color:string
  @Input() value: number
  @Input() calculatedPercent: number


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
    this.percent = this.calculatePercent().toString();
    this.calculateOffset();
  
  }
    //metoda triggerowana przy zmianie inputu
  ngOnChanges(changes: SimpleChanges){
    if (changes.calculatedPercent){
      this.percent = changes.calculatedPercent.currentValue;
      this.calculateOffset();
    }
  }

  calculateOffset(){
    let circ = Math.floor(this.radius * 3.14 * 2)
    let offset = circ - (parseInt(this.percent) / 100) * circ;
    console.log(offset)
   
    this.strokeDasharray = `${circ} ${circ}`
    this.strokeDashoffset = offset 
  

   
  }
  calculatePercent(): number{
    return this.calculatedPercent
   // return (this.value/this.sum) * 100
  }

}
