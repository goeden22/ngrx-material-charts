import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  defaultColor: String = 'red'

  selected: String
  constructor() {
    
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
  }
  onSubmit(){
    if(this.validate()){
      console.log(this.entryForm.value)
    }
  }

}
