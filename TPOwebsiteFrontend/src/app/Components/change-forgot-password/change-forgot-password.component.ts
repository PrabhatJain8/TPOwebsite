import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/company.service';
import { UpcomingService } from 'src/app/upcoming.service';

@Component({
  selector: 'app-change-forgot-password',
  templateUrl: './change-forgot-password.component.html',
  styleUrls: ['./change-forgot-password.component.css']
})
export class ChangeForgotPasswordComponent {
  helper:any;
  constructor(private upcoming: UpcomingService,private company: CompanyService,private router:Router){
    this.helper=(this.router.getCurrentNavigation()?.extras.state);
    this.change.email=this.helper.email;
  }

  change:any={
    email:'',
    oldPass:'',
    newPass:'',
    cnewPass:'',
    isForgot:true,
  }
  
  
  onSubmit()
  {
    // this.change.email=this.upcoming.getEmail();
    console.log(this.change);
    if(confirm("You Really want to change password?")){
      this.company.changePassword(this.change).subscribe({
        next: (res)=>{alert("Password Change Successfully :) !")
        localStorage.removeItem('jwt');
        this.router.navigateByUrl('login'); 
      },
        error: (error)=> (alert("Something Wrong Happend Try again"))
      });
    }
  }
}
