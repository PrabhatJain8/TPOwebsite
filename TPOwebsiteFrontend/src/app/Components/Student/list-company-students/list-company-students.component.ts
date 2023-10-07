import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/company.service';

@Component({
  selector: 'app-list-company-students',
  templateUrl: './list-company-students.component.html',
  styleUrls: ['./list-company-students.component.css']
})
export class ListCompanyStudentsComponent {

  companylist : any=[];
  search:any;

  constructor(public companyservice : CompanyService,private router : Router){

  }
  ngOnInit(){
    return this.companyservice.GetAllCompanies().subscribe((res)=>{
        console.log(res);
        this.companylist=res;
        
    })
  }

  detailsCompany(company  : any){
    this.router.navigateByUrl('details',{state:{id: company.id,described:company.description}});
  }

}
