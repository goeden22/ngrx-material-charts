
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Entry } from '../../models/entry.model';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements OnInit {
  private _entries: Array<Entry>
  calculatedSum : number
  @Input() sum: number

//entries getter and setter, triggered when entries are set or modified

 get entries(): Array<Entry>{
    return this._entries;
  }
  @Input()
  set entries(value: Array<Entry>){
    this._entries = value  
    this.calculatedSum = this.calculateSum();

  }

  
  constructor() { }

  ngOnInit(): void {
  }
  //calculate sum of entries in bar
  calculateSum(): number{
    let calculated : number = 0
    this.entries.forEach(entry => {
      calculated += entry.value
    })
    return calculated
  }
  //calculate graphic value of single entry relative on other values
  calculatePercent(i) :number{
    if (i == 0){
      return 100
    } else {
      //calculate sum of all values left in array
      return (this.entries[i].value/this.entries[0].value) *100
        
      }
     
      
    }
  

}
