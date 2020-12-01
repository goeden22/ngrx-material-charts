import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'

import { Entry } from '../../models/entry.model';
import { Color } from '../../models/color.model';
import { colorPalette} from '../../themes/colors'
import { AppState } from '../../reducers';

import { AddEntryAction, DeleteEntryAction, EditEntryAction } from '../../actions/charts.actions';
import { DeleteColorAction, AddColorAction } from '../../actions/color.actions';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component'

@Component({
  selector: 'app-charts-table',
  templateUrl: './charts-table.component.html',
  styleUrls: ['./charts-table.component.scss']
})
export class ChartsTableComponent implements OnInit {

  @Input() dataSource: Array<Entry>
  displayedColumns: string[] = ['name', 'value', 'color', 'delete', 'edit'];
  colors: Array<Color> = colorPalette

  constructor(private store: Store<AppState>, public dialog: MatDialog) { }

  ngOnInit(): void {
   
  }

  //EDIT
  openEditDialog(current: Entry) {
    let dialogConfig = new MatDialogConfig();
    //set colors from store
    this.store.select('colors').subscribe(state => {
      this.colors = state
    })
    //set dialog data
    dialogConfig.data = {
      current, //edited input
      colors: this.colors
    }
    let dialogRef = this.dialog.open(EditDialogComponent, dialogConfig)
    //waiting for onEdit event from dialog
    dialogRef.componentInstance.onEdit.subscribe((editedEntry: Entry) => {
      this.store.dispatch(new EditEntryAction(editedEntry));
      this.store.dispatch(new AddColorAction(current.color))
      this.store.dispatch(new DeleteColorAction(editedEntry.color.value))
      dialogRef.close()
    })

  }
  //DELETE
  onDelete(id: string) {
    this.store.dispatch(new AddColorAction(this.dataSource.find(el => {
      return el.id === id
     }).color))
    this.store.dispatch(new DeleteEntryAction(id));
  }

}
