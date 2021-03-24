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


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    LoginComponentComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RegisterComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
