import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/company.service';
// import {JwtHelperService} from '@auth0/angular-jwt'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  baseUrl ="https://localhost:7277/";
  constructor(private http : HttpClient,private router: Router,public companyservice: CompanyService) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

      login: any ={
        email:"",
        password:"",
        role:""
      };

      onSubmit(){
        
        
          
          // .subscribe(
          //   (res)=>{ 
          //     localStorage.setItem('loginUser',this.login.role);
          //     // localStorage.setItem('loginEmail',this.login.email);
          //   },
          //   error=>{
          //     alert("USER NOT FOUND");
          //   },
          //   ()=> {this.router.navigateByUrl('admin-company');
          // }
          // );

          this.http.post(this.baseUrl+'Login',JSON.stringify(this.login),this.httpOptions).subscribe({
            next : (res:any)=> {this.login=res;
            localStorage.setItem('jwt',res.token);
            this.router.navigateByUrl(`${this.companyservice.getRole()}-company`);
            
            
          },
            error:  (err)=> {
              console.log(err);
              alert(err.error)},
            
            //next: ()=> this.router.navigateByUrl('admin-company')
          })
       
          // .subscribe(
          //   res=> {
              
          //     localStorage.setItem('loginUser',this.login.role);
          //     // localStorage.setItem('loginEmail',this.login.email);
          //   },
          //   error=> {alert("USER NOT FOUND");},
          //   ()=>{this.router.navigateByUrl('student-company');}
          // )
    
      }
      
}
