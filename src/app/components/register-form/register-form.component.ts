import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/common/users';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { NgForm } from "@angular/forms";
import { RegistrationService } from 'src/app/services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  user= new Users();
  errorMsg="";
  
  constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService
    , private router: Router) { }

  ngOnInit(): void {
    
  }

  registerUser(){
    this.registrationService.registerUserFromRemote(this.user).subscribe(
      data=> {
        console.log("response received");
        this.errorMsg="Registration Succesful. Now you can login";
        this.router.navigate(['/login']);
      },
      error=>{
        console.log("Exception occured");
        this.errorMsg= "Error registering";
      }
    )
  }

}
