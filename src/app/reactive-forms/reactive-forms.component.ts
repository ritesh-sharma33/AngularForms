import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  myForm: FormGroup;
  formattedMessage: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {


    // The below one is the FormControl approach

    // this.myForm = new FormGroup({
    //   name: new FormControl('Ritesh'),
    //   email: new FormControl(''),
    //   message: new FormControl('')
    // });

    // The below one is the FormBuilder approach with validation
    
    // this.myForm = this.fb.group({
    //   name: ["Ritesh", Validators.required],
    //   email: ["", [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
    //   message: ["", [Validators.required, Validators.minLength(15)]]
    // });

    this.myForm = this.fb.group({
      name: '',
      email: '',
      message: ''
    });

    this.onChanges();
  }

  onChanges(): void {
    this.myForm.valueChanges.subscribe(val => {
      this.formattedMessage = 
      `Hello,
        My name is ${val.name} and my email is ${val.email},
        I would like to tell you that ${val.message}.
      `
    })
  }

  onSubmit(form: FormGroup) {
    console.log("Valid?", form.valid);
    console.log('Name', form.value.name);
    console.log("Email", form.value.email);
    console.log("Message", form.value.message);
  }

}
