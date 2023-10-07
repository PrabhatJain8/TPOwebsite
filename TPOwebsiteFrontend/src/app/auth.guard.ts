import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CompanyService } from './company.service';

// const LoggedUser=localStorage.getItem("loginUser");  //never used 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private router: Router,public companyservice: CompanyService,private http: HttpClient) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    
    //var info=localStorage.getItem('loginUser')==null?'':localStorage.getItem('loginUser');
    
    
    const info = localStorage.getItem('jwt');
    var data:any;
    if(info!=null){
        data = this.companyservice.getDecodedAccessToken(info);
    }
    console.log(data);
    const role = data==null? '': data.Role;
    console.log(`role==${role}`);

    
    // var roleEmail:string ='';
    // var url='https://localhost:7277/StudentLR/'+localStorage.getItem('loginEmail');
    
    // this.http.get(url).subscribe(
    //   res=>{
    //     console.log(res);
    //     this.logg=res;
        
    //   },
    //   error=>{ console.log(error); }
    // );
    
    
    const {routeConfig} = route;

    const {path} = routeConfig as Route;
    // console.log(route);
    // console.log(routeConfig);
    // console.log(logg);
    if ((path?.includes('admin-company') || path?.includes('add-company') || path?.includes('edit-company/:id'))&& role === 'admin') {
      // if user is administrator and is trying to access admin routes, allow access.
        return true;
    }
    //controlling Upcoming companies data
    if((path?.includes('upcoming-list') || path?.includes('upcoming-add') || path?.includes('enrolled-admin') || path?.includes('enrolled-list'))&& role=='admin'){
      return true;
    }
    if((path?.includes('student-company') || path?.includes('student-upcoming') || path?.includes('enroll') || path?.includes('enrolled-student'))&& role==='student'){
      return true;
    }

    if((path?.includes('details') || path?.includes('description') || path?.includes('eligibility')|| path?.includes('past-list') || path?.includes('comments')|| path?.includes('change-password') )&& (role==='student' || role==='admin')){
      return true;
    }

    if(role===''){
      this.router.navigateByUrl('login');
      return false;
    }
    if(role==='student' || role==='admin'){
      this.router.navigateByUrl(role+'-company');
      return false;
    }
    
    this.router.navigateByUrl('login');
    return false;


  }
  
}
