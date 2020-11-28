import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


import { Entry } from './models/entry.model';
import { Color } from './models/color.model';
import { colorPalette} from './themes/colors'

import { AppState } from './reducers';
import { AddEntryAction, DeleteEntryAction, EditEntryAction } from './actions/charts.actions';

import {MatDialog, MatDialogConfig} from '@angular/material/dialog'

import { DialogInputComponent } from './components/dialog-input/dialog-input.component'
import { DeleteColorAction, AddColorAction } from './actions/color.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    entries: any
    sum: number
    colors: Array<Color> = colorPalette

    constructor(private store: Store<AppState>, public dialog: MatDialog){
      
    }
    //ADD ENTRY DIALOG
    openAddDialog(){
      let dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        colors: this.colors
      }
      //czekamy na event z dialogInput wywolywany submitowaniem formularza
      let dialogRef = this.dialog.open(DialogInputComponent, dialogConfig)
      dialogRef.componentInstance.onAdd.subscribe((newEntry) => {
        this.addInput(newEntry)
        dialogRef.close()
      })
    }
    ngOnInit() {
      
     
      this.store.select<any>('charts').subscribe(state => {
        this.entries = state.data;
        this.sum = state.sum
        this.entries.forEach(entry => {
          //removing already used colors from palette
          this.store.dispatch(new DeleteColorAction(entry.color.value))
          });
      })
      this.store.select('colors').subscribe(state => {
        this.colors = state
      })
    
    }

    deleteInput(id: string) {
   
      this.store.dispatch(new AddColorAction(this.entries.find(el => {
        return el.id === id
       }).color))
      
      this.store.dispatch(new DeleteEntryAction(id));
    }
    editInput(editedInput: Entry){
      this.store.dispatch(new EditEntryAction(editedInput));
    }
    addInput(newInput: Entry){
      this.store.dispatch(new DeleteColorAction(newInput.color.value))
      console.log(this.colors)
      this.store.dispatch(new AddEntryAction(newInput))
    }
}
