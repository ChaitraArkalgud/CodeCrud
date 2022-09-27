import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  
  @ViewChild('dialog_success') dialog_success: ElementRef; 
  constructor(private apiService:ApiServiceService,private router: Router) { }
  closeResult: string;
  ngOnInit() {
   
  }


 
 contactForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    status: new FormControl(),
  })
 
  
  
 
  createUser(contactForm)
{
  let value = this.apiService.createUser(this.contactForm.value).subscribe(data => {
    console.log("Created successfully");
    this.contactForm.reset();
  },
  error =>{
    console.log("error")
  });
}
}
