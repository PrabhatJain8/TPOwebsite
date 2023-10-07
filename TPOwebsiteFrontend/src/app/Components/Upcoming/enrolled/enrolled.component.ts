import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { UpcomingService } from 'src/app/upcoming.service';

@Component({
  selector: 'app-enrolled',
  templateUrl: './enrolled.component.html',
  styleUrls: ['./enrolled.component.css']
})
export class EnrolledComponent {
  compID:any;
  compName:any;
  helper:any;

  enroll: any = {
    compId:0,
    compName:'',
    email:'',
    studentName:'',
    cgpa:0,
    backlog:0,
    percentage:0
  }

  constructor(private router: Router,public upcomingservice:UpcomingService){
    this.helper=(this.router.getCurrentNavigation()?.extras.state);
    this.compID=this.helper.id;
    this.compName=this.helper.name;

  }
  onSubmit(){
    this.enroll.compId  = this.compID;
    this.enroll.compName = this.compName;
    this.enroll.email = this.upcomingservice.getEmail();
    // console.log(this.enroll);
    this.upcomingservice.Enroll(this.enroll).subscribe({
      next: (res)=>{ 
        this.router.navigateByUrl('student-upcoming');
        alert("Enrolled Successfully");}
    });
    
  }

}
