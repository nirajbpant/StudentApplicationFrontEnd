import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookService } from './services/book.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { FormsModule } from "@angular/forms";
import { RegistrationService } from './services/registration.service';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { LoginSuccessComponent } from './components/login-success/login-success.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { CreateBookComponent } from './components/create-book/create-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    LoginComponentComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RegisterComponentComponent,
    AdminPanelComponent,
    LoginSuccessComponent,
    UpdateBookComponent,
    CreateBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [BookService, RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
