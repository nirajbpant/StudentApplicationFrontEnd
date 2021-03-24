import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginComponentComponent } from './components/login-component/login-component.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Library-Front';
    modalRef: BsModalRef;


  constructor(private modalService: BsModalService){}

  openModal(){
    this.modalRef = this.modalService.show(LoginComponentComponent);
  }
}
