import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Entry } from '../../models/entry.model';


import {MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  entryForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    color: new FormControl(''),
    value: new FormControl('', [
      Validators.required,
    ])
  })

  onAdd: EventEmitter<Entry> = new EventEmitter();

  defaultColor: String = 'red'

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    
  }
  numberValidate(controlField){
    var reg = new RegExp('[0-9]');
    let fieldValue : String = this.entryForm.get(controlField).value
    if(!reg.test(fieldValue.slice(-1))){
      this.entryForm.get('value').setValue(fieldValue.substring(0,fieldValue.length -1))
    }
  }
  validate(){
    return !this.entryForm.controls['name'].errors && !this.entryForm.controls['value'].errors
  }
  ngOnInit(): void {
    this.entryForm.get('color').setValue(this.defaultColor);
    this.entryForm.setValue({
   name: this.data.input.name,
   color: this.data.input.color,
   value: this.data.input.value,
    });
  }
  onSubmit(){
    if(this.validate()){
      let newEntry = this.entryForm.value
      newEntry.value = parseInt(newEntry.value)
      this.onAdd.emit(newEntry);
    }
    
  }
}
