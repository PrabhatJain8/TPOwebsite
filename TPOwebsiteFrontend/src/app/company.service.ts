import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http'
import { Observable, Observer } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment.development';










@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl =environment.baseUrl;
  
  constructor(private http : HttpClient) {
    
   }
   
  token:any= localStorage.getItem('jwt');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':  `Bearer ${this.token}`
    }),
  };

  GetAllCompanies(){
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      'Authorization':  `Bearer ${localStorage.getItem('jwt')}`
      })
    };
    console.log(localStorage.getItem('jwt'));
    return this.http.get(this.baseUrl+'Company',this.httpOptions);
  }

  GetCompanyByID(id :any){
    return this.http.get(this.baseUrl+`Company/${id}`,this.httpOptions);
  }
  CreateCompany(data: any){
    return this.http.post(this.baseUrl+'Company',JSON.stringify(data),this.httpOptions);
  }

  DeleteCompany(id : any){
    console.log(typeof id);
    return this.http.delete(this.baseUrl+'Company/'+id,this.httpOptions);
  }

  UpdateCompany(data:any ,id:any){
    return this.http.put(this.baseUrl+'Company/'+id,JSON.stringify(data),this.httpOptions);
  }
  RegisterUser (data:any)
  {
    return this.http.post(this.baseUrl+'Register',JSON.stringify(data),this.httpOptions);
  }

  changePassword(change: any){
    return this.http.post(this.baseUrl+'ChangePassword',JSON.stringify(change),this.httpOptions);
  }
  
  isUserLogin()
  {
    return localStorage.getItem('jwt')==null?false:true;
  }

  verify(code:any){
    return this.http.get(this.baseUrl+'verify/'+code);
  }


  checkAlreadyExist(data: any){
    return this.http.post(this.baseUrl+'AlreadyExist',JSON.stringify(data),this.httpOptions);
  }

  sendCode(email:any){
    return this.http.post(this.baseUrl+'sendEmail',JSON.stringify(email),this.httpOptions);
  }
  getRole()
  {
    const info = localStorage.getItem('jwt');
    var data:any;
    if(info!=null){
        data = this.getDecodedAccessToken(info);
    }
    
    const role = data==null? '': data.Role;
    return role;
   
  }
  
  getDecodedAccessToken(token: string) {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

}
