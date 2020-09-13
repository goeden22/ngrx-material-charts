import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';

const MaterialComponents = [
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule 
]

@NgModule({
  imports: [
    MaterialComponents,
    
  ],
  exports: [
    MaterialComponents,
   
  ]
})
export class MaterialModule { }
