import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Entry } from '../../models/entry.model';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  @Input() entries: Observable<Array<Entry>>
  @Input() sum: number
  
 

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.entries)
  }
  calculateSum(){
  }

}
