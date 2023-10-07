import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from './company.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CompanyFrontend';
  isLogin:any;
  role:any;
  token:any = localStorage.getItem('jwt');
  constructor(public companyservice: CompanyService,private router:Router,private jwtHelper: JwtHelperService,public user:CommentService){

  }
  ngOnInit(){
    if (this.jwtHelper.isTokenExpired(this.token)) {
      localStorage.removeItem('jwt'); 
    }
  }
  onClick(){
    localStorage.removeItem('jwt');
    this.router.navigateByUrl('login'); 
   }
}
