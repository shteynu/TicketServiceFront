import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  showSignUp = false;

  ngOnInit() {

  }
  onSignUpClicked(){
    this.showSignUp = true;
  }
  onSignInClicked(){
    this.showSignUp = false;
  }
}
