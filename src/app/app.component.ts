import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Entry } from './models/entry.model';
import { AppState } from './models/app-state.model';
import { AddEntryAction, DeleteEntryAction } from './actions/charts.actions';

import {MatDialog, MatDialogConfig} from '@angular/material/dialog'

import { DialogInputComponent } from './components/dialog-input/dialog-input.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    entries: Observable<Array<Entry>>

    constructor(private store: Store<AppState>, public dialog: MatDialog){
      
    }
    openDialog(){
      let dialogConfig = new MatDialogConfig();

      dialogConfig.data = {
        boom: () => {alert('boom')},
        colors: ['red','green','blue','purple']
      }

      //czekamy na event z dialogInput wywolywany submitowaniem formularza
      let dialogRef = this.dialog.open(DialogInputComponent, dialogConfig)
      dialogRef.componentInstance.onAdd.subscribe((newEntry) => {
        this.store.dispatch(new AddEntryAction(newEntry))
      })
    }
    ngOnInit() {
      this.entries = this.store.select(store => store.charts);
      
    }

    deleteEntry(id: string) {
      this.store.dispatch(new DeleteEntryAction(id));
    }
}
