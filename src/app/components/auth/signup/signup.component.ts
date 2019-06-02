import {Component, EventEmitter, OnInit,Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  signUpForm: FormGroup;
  @Output() signInClickedEmitter = new EventEmitter();
  ngOnInit() {
    this.signUpForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,
        Validators.pattern('^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$')]),
      password: new FormControl('',
        [Validators.required]),
      phone: new FormControl('',[Validators.required,Validators.pattern('\\+?\\(?([0-9]{2})\\)?[-.]?\\(?([0-9]{3})\\)?[-.]?\\(?([0-9]{3})\\)?[-.]?\\(?([0-9]{4})\\)?')])
    })
  }
  onSignUp(){
    console.log(this.signUpForm.value);
  }

  onFormReset(){
    this.signUpForm.reset();
  }

  onSignInClick(){
    this.signInClickedEmitter.emit();
  }

}
