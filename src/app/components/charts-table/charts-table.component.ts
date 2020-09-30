import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../../models/entry.model';

@Component({
  selector: 'app-charts-table',
  templateUrl: './charts-table.component.html',
  styleUrls: ['./charts-table.component.scss']
})
export class ChartsTableComponent implements OnInit {

  @Input() dataSource:  Array<Entry>
  displayedColumns: string[] = ['name','value','color','delete'];


  constructor() { }

  ngOnInit(): void {

  }

}
