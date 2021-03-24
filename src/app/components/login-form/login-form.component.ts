import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/common/users';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { RegisterComponentComponent } from '../register-component/register-component.component';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  user: Users= new Users();
  modalRef: BsModalRef;
  loginForm: FormGroup;
  isShow: false;

  constructor(private formBuilder: FormBuilder,private modalService: BsModalService) { }

  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      'username': [this.user.username,[
        Validators.required
      ] 
      ],
      'password': [this.user.password,[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)
      ]]
    });
  }

  openModal(){
    this.modalRef = this.modalService.show(RegisterComponentComponent);
  }

}
