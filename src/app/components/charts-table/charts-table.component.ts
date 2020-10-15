import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from '../../models/entry.model';

import {MatDialog, MatDialogConfig} from '@angular/material/dialog'

import { EditDialogComponent } from '../edit-dialog/edit-dialog.component'

@Component({
  selector: 'app-charts-table',
  templateUrl: './charts-table.component.html',
  styleUrls: ['./charts-table.component.scss']
})
export class ChartsTableComponent implements OnInit {

  @Output() deleteInput: EventEmitter<string> = new EventEmitter()
  @Output() editInput: EventEmitter<Entry> = new EventEmitter()
  @Input() dataSource:  Array<Entry>
  displayedColumns: string[] = ['name','value','color','delete','edit'];

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }

  openEditDialog(input){
    let dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      input,
      colors: ['red','green','blue','purple']
    }

    //czekamy na event z dialogInput wywolywany submitowaniem formularza
    let dialogRef = this.dialog.open(EditDialogComponent, dialogConfig)

    dialogRef.componentInstance.onEdit.subscribe((editedEntry) => {
      this.editInput.emit(editedEntry)
      
    })

  }

  onDelete(id){
    this.deleteInput.emit(id)
    
  }

}
