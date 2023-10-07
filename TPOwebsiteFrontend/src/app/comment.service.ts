import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  baseUrl =environment.baseUrl+"Comment/";
  
  constructor(private http : HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':  `Bearer ${localStorage.getItem('jwt')}`
    }),
  };

  getUserName()
  {
    const info = localStorage.getItem('jwt');
    var data:any;
    if(info!=null){
        data = this.getDecodedAccessToken(info);
    }
    
    const userName = data==null? '': data.UserName;
    return userName;
   
  }
  getDecodedAccessToken(token: string) {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

  getComments(name : any){
    
    return this.http.get(this.baseUrl+name,this.httpOptions);
  }

  AddComment(comment: any){
    return this.http.post(this.baseUrl,JSON.stringify(comment),this.httpOptions);
  }

  
}

