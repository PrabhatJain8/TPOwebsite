import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UpcomingService } from 'src/app/upcoming.service';

@Component({
  selector: 'app-enrolled-admin',
  templateUrl: './enrolled-admin.component.html',
  styleUrls: ['./enrolled-admin.component.css']
})
export class EnrolledAdminComponent {
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


  showList(data: any)
  {
    this.router.navigateByUrl('enrolled-list',{state: { id: data.id,name: data.companyName}});
  }
  
}
