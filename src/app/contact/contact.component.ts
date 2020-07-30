import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ReactForm:FormGroup;
  genders=[
    {
      id:'1',
      genderType:'Male'
    },
    {
      id:'2',
      genderType:'Female'
    },
  ];

  constructor() { }
  ngOnInit(){
    this.ReactForm = new FormGroup({
        'UserD':new FormGroup({
          'name':new FormControl(null,Validators.required),
          'email':new FormControl(null,[Validators.required,Validators.email])
        }),
        'msg':new FormControl(null,[Validators.required]),
        'phone':new FormControl(null,[Validators.required,Validators.minLength(10)]),
        'gender':new FormControl("Male")
      });
  }
 onSubmit(){
   console.log(this.ReactForm);
 }

}
