import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/common/users';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { RegisterComponentComponent } from '../register-component/register-component.component';
import { NgForm } from "@angular/forms";
import { RegistrationService } from 'src/app/services/registration.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
  user= new Users();
  modalRef: BsModalRef;
  loginForm: FormGroup;
  show: boolean = true;
  afterLoginshow: boolean= true;
  errorMsg= '';
  constructor(private modalService: BsModalService, 
    private registrationService: RegistrationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  openModal(){
    this.modalRef = this.modalService.show(RegisterComponentComponent);
    this.toggleShow();
  }

  toggleShow(){
    this.show =false;
  }

  loginUser(){
      this.registrationService.loginUserFromRemote(this.user).subscribe(
        data => {
          this.router.navigate(['loginsucess']);
          console.log("Response received")
          this.afterLoginshow = false;
      
        },
        error=> {
          console.log("Exception occured");
          this.errorMsg= "Bad Credentials. Please enter valid credentials";
        }
      );
  }
  openAdminModal(){
    this.modalRef= this.modalService.show(AdminPanelComponent);
  }
}
