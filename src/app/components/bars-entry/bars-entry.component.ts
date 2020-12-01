import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Entry } from '../../models/entry.model';

@Component({
  selector: 'app-bars-entry',
  templateUrl: './bars-entry.component.html',
  styleUrls: ['./bars-entry.component.scss']
})
export class BarsEntryComponent implements OnInit {
  @Input() entry: Entry
  @Input() sum: number
  @Input() calculatedPercent: number

  percent: string;

  constructor() { }

  ngOnInit(): void {
    this.percent = this.calculatePercent().toString();
  }

 
  ngOnChanges(changes: SimpleChanges){
    if (changes.calculatedPercent){
      console.log(this.calculatedPercent)
      this.percent = this.calculatePercent().toString();

    }
  }
  calculatePercent(): number{
    return this.calculatedPercent
   // return (this.value/this.sum) * 100
  }
}
