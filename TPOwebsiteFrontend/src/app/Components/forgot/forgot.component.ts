import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/company.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {

  constructor(public companyservice:CompanyService,private router: Router){

  }
  email:any = {
    EmailTo: '',
    Subject:'ForgotPassword',
    Body:''
  }

  onSubmit()
  { console.log(this.email);
    this.companyservice.sendCode(this.email).subscribe({
      next: (res)=>{
        this.router.navigateByUrl('verify',{state : {name:"", reg:"",email:this.email.EmailTo,pass:"",cpass:""}});
      },
      error: (err)=>{alert(err.error);}
    })
    
  }
}
