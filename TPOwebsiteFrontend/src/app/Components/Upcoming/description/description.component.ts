import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UpcomingService } from 'src/app/upcoming.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {

    jobDescription: any ={};
    id: any;
    // constructor(private activeRoute : ActivatedRoute,private companyservice: CompanyService,private router  : Router){
    //   this.company=(this.router.getCurrentNavigation()?.extras.state);
    //   // console.log(this.company);
    // }

    constructor(private router: Router,public upcomingservice: UpcomingService){
        this.jobDescription=(this.router.getCurrentNavigation()?.extras.state);
        this.id=this.jobDescription.id;
    }
    ngOnInit()
    {
      this.upcomingservice.GetDescByID(this.id).subscribe({
        next: (res)=>{this.jobDescription=res;
                      console.log(this.id);
                      console.log(this.jobDescription);
                     }
      });

    }
    

}
