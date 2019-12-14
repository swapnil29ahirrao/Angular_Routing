import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  fg : FormGroup;
  fields:Array<String> = [];
  constructor(fb : FormBuilder) { 
    this.fg = fb.group({
      empnofc :[""],
      enamefc :["",[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
      salaryfc :["",Validators.min(100)]
    })
    this.fields=Object.keys(this.fg.controls)
  }

  ngOnInit() {
  }

}
