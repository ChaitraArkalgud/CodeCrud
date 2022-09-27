import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
   data:any;
   userToUpdate = {
    id:"",
    name:"",
    email:"",
    gender:"",
    status:""
  }
  contactForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    status: new FormControl(),
  })
 
  constructor(private apiService:ApiServiceService,private router: Router) { }

  ngOnInit(): void {
 
   
  let value = this.apiService.getUsers().subscribe(data => {
    this.data=data;
    console.log("value",data)
  },
  error =>{
    console.log("error");
  });
  }
  deleteUser(dataVal)
  {
    console.log(dataVal);
    let value = this.apiService.deleteUser(dataVal.id).subscribe(data => {
      this.data=data;
      let value = this.apiService.getUsers().subscribe(data => {
        this.data=data;
        console.log("value",data)
      },
      error =>{
        console.log("error");
      }
      );
    });
   
  }
  edit(user: any){
    this.userToUpdate = user;
    console.log("*****",this.userToUpdate.id)
  }

  updateUser(contactForm)
  {
    console.log("contactForm",this.contactForm.value)
    let value = this.apiService.updateUser(this.userToUpdate.id,this.userToUpdate).subscribe(data => {
      this.data=data;
      console.log("value",data);
      let value = this.apiService.getUsers().subscribe(data => {
        this.data=data;
        console.log("value",data)
      },
      error =>{
        console.log("error");
      });
    },
    error =>{
      console.log("error");
    });
  }
  
}
