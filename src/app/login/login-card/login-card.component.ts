import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { register } from 'module';
import { Country } from '../../model/Country';

@Component({
  selector: 'app-login-card',
  standalone: false,
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css'
})
export class LoginCardComponent {
  submitted :boolean = false;
  isLoginCard : boolean = true
  isRegisterCard : boolean = false;
  isPasswordAssistent : boolean = false;

  selectedValue : any  = { name: 'United States', code: 'US', dialCode: '+1' };
  COUNTRIES: Country[] = [
    { name: 'United States', code: 'US', dialCode: '+1' },
    { name: 'India', code: 'IN', dialCode: '+91' },
    { name: 'United Kingdom', code: 'GB', dialCode: '+44' },
    { name: 'Germany', code: 'DE', dialCode: '+49' },
    { name: 'France', code: 'FR', dialCode: '+33' },
    { name: 'Australia', code: 'AU', dialCode: '+61' },
    { name: 'Canada', code: 'CA', dialCode: '+1' }
  ];
  
  loginForm !: FormGroup ;
  cardTitle :string = "Log in";
  constructor(
    public fb: FormBuilder
  ){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['',[Validators.required]],
      password: ['',Validators.required],
      name: ['',Validators.required],
      mobileNumber: ['',Validators.required],
      iAmNotRobot: ['',Validators.required],
      forgotPassword: ['',Validators.required]
    });
  }
  onSubmit():void{
    this.submitted = true;
  }
  changeCard(toCard: string):void{
    this.submitted = false;
    if(toCard == "register"){
      this.cardTitle = "Sign up";
      this.isRegisterCard = true;
      this.isLoginCard = false;
      this.isPasswordAssistent =  false;
    }
    else if(toCard == "login"){
      this.cardTitle = "Log in";
      this.isLoginCard = true;
      this.isRegisterCard = false;
      this.isPasswordAssistent =  false;
    }
    else if(toCard == "passwordassistent"){
      this.cardTitle = "Password Assistant";
      this.isPasswordAssistent =  true;
      this.isLoginCard = false;
      this.isRegisterCard = false;
    }
    
  }
  get myForm() {
    return this.loginForm.controls;
  }
}
