import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { LoginSuccessComponent } from './components/login-success/login-success.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';

const routes: Routes = [

  {path:'loginsucess', component: LoginSuccessComponent,
  },
  {path: 'books', component: AdminPanelComponent},
  {path: 'update/:bookId', component: UpdateBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
