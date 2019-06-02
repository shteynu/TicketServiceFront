import {
  Component, EventEmitter,
  OnInit, Output,
} from '@angular/core';

import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  signInForm: FormGroup;
  @Output('onSignUpClicked') signUpPressedEmmiter = new EventEmitter();

  ngOnInit() {
    this.signInForm = new FormGroup({
      email: new FormControl('',[Validators.required,
        Validators.pattern('^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$')]),
      password: new FormControl('',[Validators.required])})
  }


  onSignIn(){
    console.log(this.signInForm.value);
    console.log(this.signInForm)

  }

  onFormReset(){
    this.signInForm.reset();
  }

  onSignUpClick(){
    this.signUpPressedEmmiter.emit();
  }
}
