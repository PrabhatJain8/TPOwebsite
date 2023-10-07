import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from 'src/app/comment.service';
import { UpcomingService } from 'src/app/upcoming.service';

@Component({
  selector: 'app-student-upcoming',
  templateUrl: './student-upcoming.component.html',
  styleUrls: ['./student-upcoming.component.css']
})
export class StudentUpcomingComponent {
  upcomingList : any = [];
  commentList: any=[];
  enroll: any = {
    compId:0,
    compName:'',
    email:'',
    studentName:'',
    cgpa:0,
    backlog:0,
    percentage:0
  }
  constructor(public upcomingservice: UpcomingService,private router: Router,public commentservice: CommentService){}
  ngOnInit()
  {
    this.upcomingservice.GetAllUpcomings().subscribe({
        next: res => {
          this.upcomingList = res;
          this.upcomingList =this.upcomingList.filter( (x:any) => x.isDeleted==false && x.isActive==true);
          console.log(this.upcomingList.length);
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


  showHistory(name :any){
          this.commentservice.getComments(name).subscribe({
            next: (res)=>{
              this.commentList=res;
              if(this.commentList.length==0){
                alert("No History found");
              }
              else{
                this.router.navigateByUrl('comments',{state:{compName : name}});
              }
            }
          });
  }

  goForEnroll(company:any){
    this.enroll.compId=company.id;
    this.enroll.email=this.upcomingservice.getEmail();
    this.upcomingservice.CheckAlready(this.enroll).subscribe({
      next: (res)=>{
        if(res==true){
              alert("You have already enrolled in this Company")
        }
        else{
            this.router.navigateByUrl('enroll',{state: {id: company.id , name: company.companyName}});
        }
      }
    })
  }
}
