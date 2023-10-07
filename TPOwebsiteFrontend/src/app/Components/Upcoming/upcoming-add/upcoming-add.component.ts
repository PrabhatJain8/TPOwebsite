import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UpcomingService } from 'src/app/upcoming.service';

@Component({
  selector: 'app-upcoming-add',
  templateUrl: './upcoming-add.component.html',
  styleUrls: ['./upcoming-add.component.css']
})
export class UpcomingAddComponent {

    constructor(public upcomingservice : UpcomingService,private router:Router){}
    upcoming : any = {
      
      companyName: "",
      startDate: "",
      endDate: "",
      jobDesc: {
        id: 0,
        location: "",
        package: "",
        role: "",
        selectionProcess: "",
        skillsReq: "",
        moreDetails: ""
      },
      eligibility: "",
      isDeleted: false,
      isActive: true
    }


    onSubmit()
    {
      
      this.upcomingservice.CreateUpcoming(this.upcoming).subscribe({
          next: ()=>{
            console.log("Upcoming company added successfully!");
            this.router.navigateByUrl('upcoming-list');
          }
      });
    }
}
