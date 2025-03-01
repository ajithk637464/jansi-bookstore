import { Component } from '@angular/core';

@Component({
  selector: 'app-login-card',
  standalone: false,
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css'
})
export class LoginCardComponent {
  invalidEmail :boolean = true;
  invalidPassword :boolean = true;

  changevalue(){
    if(this.invalidEmail){
      this.invalidEmail= false;
      this.invalidPassword = false;
    }
    else{
      this.invalidEmail= true;
      this.invalidPassword = true;
    }
  }
}
