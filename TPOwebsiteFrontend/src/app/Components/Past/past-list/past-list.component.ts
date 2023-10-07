import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UpcomingService } from 'src/app/upcoming.service';

@Component({
  selector: 'app-past-list',
  templateUrl: './past-list.component.html',
  styleUrls: ['./past-list.component.css']
})
export class PastListComponent {
  pastList : any = [];
  constructor(public upcomingservice: UpcomingService,private router: Router){}
  ngOnInit()
  {
    this.upcomingservice.GetAllUpcomings().subscribe({
        next: res => {
          this.pastList = res;
          this.pastList =this.pastList.filter( (x:any) => x.isDeleted==false && x.isActive==false);
          console.log(this.pastList);
        }
    });
  }

  showDetails(company :any){
    console.log(company.id);
    this.router.navigateByUrl('description',{state: {id: company.id }});
  }

  showEligibility(eligible : any){
    this.router.navigateByUrl('eligibility',{state: { eligibled : eligible }});
  }

  showComments(name : any){
    console.log(name)
    this.router.navigateByUrl('comments',{state:{compName : name}});
  }
}
