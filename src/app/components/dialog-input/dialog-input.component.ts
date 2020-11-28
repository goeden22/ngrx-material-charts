import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Entry } from '../../models/entry.model';
import { Color } from '../../models/color.model';
import { v4 as uuid } from 'uuid';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-input',
  templateUrl: './dialog-input.component.html',
  styleUrls: ['./dialog-input.component.scss']
})
export class DialogInputComponent implements OnInit {
 

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
  colors: Array<Color>

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
    this.colors = this.data.colors
    this.entryForm.get('color').setValue(this.colors[0].value);
 

  }
  onSubmit(){

    if(this.validate()){
      let newEntry = this.entryForm.value
      newEntry.value = parseInt(newEntry.value)
      newEntry.color = this.colors[this.colors.findIndex(cl => {
        return cl.value === this.entryForm.get('color').value
      })]
      newEntry.id = uuid();
      this.onAdd.emit(newEntry);
    }
    
  }

}
