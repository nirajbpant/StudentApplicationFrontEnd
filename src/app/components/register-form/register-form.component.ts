import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/common/users';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  user: Users= new Users();
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      'id':[this.user.id,[
        Validators.required
      ]],
      'username': [this.user.username,[
        Validators.required
      ] 
      ],
      'role':[this.user.id,[
        Validators.required
      ]],
      'password': [this.user.password,[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)
      ]]
    });
  }

}
