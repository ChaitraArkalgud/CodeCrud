import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserListComponent
  ],
  imports: [
    
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([  
      {path: 'userList', component: UserListComponent  },  
      {path: 'Create', component: CreateUserComponent },  
      {path: "update" , component: CreateUserComponent}  
     ]),  
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
