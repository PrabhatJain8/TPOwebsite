import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { CompanyService } from 'src/app/company.service';
import { UpcomingService } from 'src/app/upcoming.service';

@Component({
  selector: 'app-upcoming-list',
  templateUrl: './upcoming-list.component.html',
  styleUrls: ['./upcoming-list.component.css']
})
export class UpcomingListComponent {

    constructor(public upcomingservice: UpcomingService,private router: Router){}
    upcomingList : any = [];

    ngOnInit()
    {
      this.upcomingservice.GetAllUpcomings().subscribe({
          next: res => {
            this.upcomingList = res;
            this.upcomingList =this.upcomingList.filter( (x:any) => x.isDeleted==false && x.isActive==true);
            console.log(this.upcomingList);
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

    onDelete(company:any){
      if(confirm("You really want to delete?")){
      return this.upcomingservice.DeleteUpcoming(company.id).subscribe({
        next: (res)=> { 

          // this.upcomingList =this.upcomingList.filter( (x:any) => x.isDeleted==false);
          window.location.reload(); 
        }
      });
      }
      else{
        return this.router.navigateByUrl('upcoming-list');
      }
    }

}
