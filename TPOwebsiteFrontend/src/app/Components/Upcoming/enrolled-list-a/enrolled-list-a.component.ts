import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UpcomingService } from 'src/app/upcoming.service';

@Component({
  selector: 'app-enrolled-list-a',
  templateUrl: './enrolled-list-a.component.html',
  styleUrls: ['./enrolled-list-a.component.css']
})
export class EnrolledListAComponent {
  helper:any;
  id:any;
  company:any;
  enrolledList :any = [];

  constructor(private router: Router,public upcomingservice: UpcomingService){
    this.helper=(this.router.getCurrentNavigation()?.extras.state);
    this.id=this.helper.id;
    this.company=this.helper.name;
  }


  ngOnInit(){
  
    this.upcomingservice.getEnrolledlistAdmin(this.id).subscribe({
      next:(res)=>{
        this.enrolledList=res;
      }
    })
  }


}
