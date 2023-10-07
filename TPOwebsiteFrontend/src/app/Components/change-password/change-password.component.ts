import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/company.service';
import { UpcomingService } from 'src/app/upcoming.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  constructor(private upcoming: UpcomingService,private company: CompanyService,private router:Router){
    
  }

  change:any={
    email:'',
    oldPass:'',
    newPass:'',
    cnewPass:'',
    isForgot: false,
  }
  
  
  onSubmit()
  {
    this.change.email=this.upcoming.getEmail();
    if(confirm("You Really want to change password?")){
      this.company.changePassword(this.change).subscribe({
        next: (res)=>{alert("Password Change Successfully :) !")
        localStorage.removeItem('jwt');
        this.router.navigateByUrl('login'); 
      },
        error: (error)=> (alert(error.error))  
      });
    }
  }
}
