import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';



@NgModule({
  declarations: [
    UserListComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateUserComponent
  ]
})
export class UserAuthModule { }
