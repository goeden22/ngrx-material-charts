import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Entry } from '../../models/entry.model';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  private _entries: Array<Entry>
  @Input() sum: number

 get entries(): Array<Entry>{
    return this._entries;
  }
  @Input()
  set entries(value: Array<Entry>){
    this._entries = value
    
    this.calculatedSum = this.calculateSum();
    console.log(value)

  }
  calculatedSum : number


  constructor() {

  }

  ngOnInit(): void {
    this.calculatedSum = this.calculateSum();
  }
  
  calculateSum(){
    let calculated : number = 0
    this.entries.forEach(entry => {
      calculated += entry.value
    })
    return calculated
  }
  prevValue(position){
    return position
  }

}
