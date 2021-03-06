import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store'; 

import { ChartsReducer } from './reducers/charts.reducer';
import {reducers} from './reducers'

import { AppComponent } from './app.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ChartsEntryComponent } from './components/charts-entry/charts-entry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material/material.module';
import { DialogInputComponent } from './components/dialog-input/dialog-input.component';
import { ChartsTableComponent } from './components/charts-table/charts-table.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { BarsComponent } from './components/bars/bars.component';
import { BarsEntryComponent } from './components/bars-entry/bars-entry.component'



@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    ChartsEntryComponent,
    DialogInputComponent,
    ChartsTableComponent,
    EditDialogComponent,
    BarsComponent,
    BarsEntryComponent
  ],
  entryComponents: [DialogInputComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
   StoreModule.forRoot(reducers),
   BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
