import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/company.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {
  helper:any;

  email:any = {
    EmailTo: '',
    Subject:'',
    Body:''
  }
  register:any={
    name:"",
    reg_no:"",
    college_email:"",
    password:"",
    confirm_password:""
}
constructor(private router:Router,public companyservice:CompanyService){
  this.helper=(this.router.getCurrentNavigation()?.extras.state);
  this.register.name=this.helper.name;
  this.register.reg_no=this.helper.reg;
  this.register.college_email=this.helper.email;
  this.register.password=this.helper.pass;
  this.register.confirm_password=this.helper.cpass;
  console.log(this.register);
}


  onSubmit(){
    console.log(this.email);
    this.companyservice.verify(this.email.Subject).subscribe({
      next: (res)=>{
        
        if(this.register.password==""){
          this.router.navigateByUrl('change-forgot-password',{state: {email: this.register.college_email}});
        }
        else{
            this.companyservice.RegisterUser(this.register).subscribe({
          complete:()=> alert("User Registered Successfully!"),
          error: (error)=>{
            if(error.status==404){
              alert(error.error);
            }
            else{
              alert("Something Wrong happend");
            }
          },
          next: ()=>{this.router.navigateByUrl('login')}

          })
        }
        
      },
      error: (err)=>{ alert("Entered code is wrong");
      // this.router.navigateByUrl('register');
              }
    });
  }
}
