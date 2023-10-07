import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UpcomingService {
  baseUrl =environment.baseUrl+"Upcoming/";
  
  constructor(private http : HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':  `Bearer ${localStorage.getItem('jwt')}`
    }),
  };

  GetAllUpcomings()
  {
    return this.http.get(this.baseUrl,this.httpOptions);
  }

  GetUpcomingByID(id :any){
    return this.http.get(this.baseUrl+id,this.httpOptions);
  }

  GetDescByID(id: any){
    return this.http.get(this.baseUrl+'Description/'+id,this.httpOptions);
  }
  CreateUpcoming(data: any){
    return this.http.post(this.baseUrl,JSON.stringify(data),this.httpOptions);
  }

  DeleteUpcoming(id: any){
    return this.http.delete(this.baseUrl+id,this.httpOptions);
  }


  CheckAlready(data: any){
    return this.http.post(this.baseUrl+'CheckEnroll',JSON.stringify(data),this.httpOptions);
  }

  Enroll(data:any){
    return this.http.post(this.baseUrl+'Enroll',JSON.stringify(data),this.httpOptions);
  }

  getEmail()
  {
    const info = localStorage.getItem('jwt');
    var data:any;
    if(info!=null){
        data = this.getDecodedAccessToken(info);
    }
    
    const email = data==null? '': data.UserEmail;
    return email;
   
  }
  
  getDecodedAccessToken(token: string) {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

  getEnrolledlist()
  {
    var email=this.getEmail();
    return this.http.get(this.baseUrl+`Enrolled/${email}`,this.httpOptions);
  }


  getEnrolledlistAdmin(id : any)
  {
    return this.http.get(this.baseUrl+`EnrolledAdmin/${id}`,this.httpOptions);
  }

  

  

}
