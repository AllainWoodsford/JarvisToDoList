//Angular Imports
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
//Internal Components

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { UserComponent } from './user/user.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
//Material UI stuff
import { MyMaterialModule } from  './material.module';
//Services
import { ToDoListService } from './services/todolist.service';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    UserComponent,
    ToDoListComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login' , redirectTo: '/' , pathMatch: 'full'},
    ]),
    MyMaterialModule,
  ],
  providers: [
    ToDoListService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
