import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/company.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
// name { get; set; }
// 		public string reg_no { get; set; }
// 		public string college_email { get; set; }
// 		public string password { get; set; }
// 		public string confirm_password {
export class RegisterComponent {
      
  baseUrl ="https://localhost:7277/";
  constructor(private http : HttpClient,private router: Router,public companyservice: CompanyService) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
  email:any = {
    EmailTo: '',
    Subject:'send',
    Body:'email'
  }

  register:any={
      name:"",
      reg_no:"",
      college_email:"",
      password:"",
      confirm_password:""
  }

  
  onSubmit(){
    this.email.EmailTo=this.register.college_email;
    this.companyservice.checkAlreadyExist(this.register).subscribe({
      next: ()=>{
        this.companyservice.sendCode(this.email).subscribe({
          next: (res)=>{this.router.navigateByUrl('verify',{state : {name:this.register.name, reg:this.register.reg_no,email:this.register.college_email,pass:this.register.password,cpass:this.register.confirm_password}});}
        })
      },
      error: (err)=>{
        alert(err.error);
        
      }
    });
    
    
    

  }

  
      
}
