import { Component } from '@angular/core';
import { UpcomingService } from 'src/app/upcoming.service';

@Component({
  selector: 'app-enrolled-student',
  templateUrl: './enrolled-student.component.html',
  styleUrls: ['./enrolled-student.component.css']
})
export class EnrolledStudentComponent {
    getEnrolledList: any=[];



    constructor(public upcomingservice: UpcomingService){

    }


    ngOnInit()
    {
      this.upcomingservice.getEnrolledlist().subscribe({
        next: (res)=>{
          this.getEnrolledList=res;
        }
      })
    }
}
