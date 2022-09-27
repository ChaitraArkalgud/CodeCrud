import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  

  constructor(private http: HttpClient) { }

  
  apiURL = 'https://gorest.co.in/public/v2/users'
  getUsers() {
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 7dde72333be762bcb4e014087f525e0c30c7543630e70e40cef0aa66b98849d5'
   });
    return this.http.get(this.apiURL ,{ headers: reqHeader });
  }
  createUser(formValue) {
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 7dde72333be762bcb4e014087f525e0c30c7543630e70e40cef0aa66b98849d5'
   });
    return this.http.post(this.apiURL ,formValue,{ headers: reqHeader });
  }
  deleteUser(id) {
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 7dde72333be762bcb4e014087f525e0c30c7543630e70e40cef0aa66b98849d5'
   });
   console.log(this.apiURL + id)
  return this.http.delete(this.apiURL + '/' + id,{ headers: reqHeader });
  }

 updateUser(id,formValue) {
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 7dde72333be762bcb4e014087f525e0c30c7543630e70e40cef0aa66b98849d5'
   });
   console.log(this.apiURL + '/' + id)
   console.log(formValue)
    return this.http.put(this.apiURL + '/' + id,formValue,{ headers: reqHeader });
}

}