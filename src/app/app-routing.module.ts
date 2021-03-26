import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginSuccessComponent } from './components/login-success/login-success.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';

const routes: Routes = [

  {path:'loginsucess', component: LoginSuccessComponent,
  },
  {path: 'books', component: AdminPanelComponent},
  {path: 'update/:bookId', component: UpdateBookComponent},
  {path: 'createBook', component: CreateBookComponent},
  {path: 'home', component: AppComponent},
  {path: 'login', component: LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
