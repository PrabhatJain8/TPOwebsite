import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from 'src/app/comment.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

      
      company:any='';
      commentList:any=[];
      comment:any={
        companyName:'',
        userName:this.commentservice.getUserName(),
        msg:'',
        date:''
      }
      helper:any;
      constructor(private router: Router,public commentservice : CommentService,public datepipe : DatePipe){
        this.helper = (this.router.getCurrentNavigation()?.extras.state);
        this.company=this.helper.compName;
        // console.log(`comment==${this.comment.companyName}`);
        // console.log(this.company);
      }
      ngOnInit()
      {
        if(this.company!=''){
          this.commentservice.getComments(this.company).subscribe({
            next:(res)=>{
              this.commentList=res;
              console.log(this.commentList);
            }
          });
        }
      }

      addComment()
      {
        this.comment.companyName=this.company;
        this.comment.date=this.datepipe.transform((new Date), 'dd-MM-yyyy');
        console.log(this.comment);
        this.commentservice.AddComment(this.comment).subscribe({
          next: ()=> {console.log("comment added successfully!!");
                      window.location.reload();
        }
        })
        
      }



}
