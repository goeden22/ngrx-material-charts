import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

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

    newEntry: Entry = {id: '', name: "", value: 0}

    constructor(private store: Store<AppState>, public dialog: MatDialog){
      
    }
    openDialog(){
      let dialogConfig = new MatDialogConfig();

      dialogConfig.data = {
        boom: () => {alert('boom')}
      }
      this.dialog.open(DialogInputComponent, dialogConfig)
    }
    ngOnInit() {
      this.entries = this.store.select(store => store.charts);
      
    }
    addEntry(){
      this.newEntry.id = uuid();

      this.store.dispatch(new AddEntryAction(this.newEntry))

      this.newEntry = {id: '', name: "", value: 0}
    }

    deleteEntry(id: string) {
      this.store.dispatch(new DeleteEntryAction(id));
    }
}
