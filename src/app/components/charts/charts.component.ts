import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Entry } from '../../models/entry.model';

import {  ChangeDetectorRef  } from "@angular/core";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
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
  constructor() {

  }
  ngOnInit(): void {
  }
  //calculate sum of all entries
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
      let valuesLeftSum = 0
      this.entries.slice(i +1,this.entries.length).forEach(entry => {
        valuesLeftSum += entry.value
        
      })
     return (((this.entries[i].value +valuesLeftSum)/this.calculatedSum) * 100)
      
    }
  }

}
