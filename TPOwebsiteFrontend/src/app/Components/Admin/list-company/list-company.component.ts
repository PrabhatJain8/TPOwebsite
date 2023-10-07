import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/company.service';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent {

    companylist : any=[];

    constructor(public companyservice : CompanyService, private router : Router){

    }
    ngOnInit(){
      return this.companyservice.GetAllCompanies().subscribe((res)=>{
          console.log(res);
          this.companylist=res;
          
      })
    }

    deleteCompany(company: any){
        var index =this.companylist.map((x: { id: any; }) => x.id).indexOf(company.id);
        console.log(index); 
        if(confirm("You really want to delete?")){
          return this.companyservice.DeleteCompany(company.id).subscribe(()=>{
            this.companylist.splice(index, 1);
            this.router.navigateByUrl('admin-company');
            // window.location.reload(); second way
            console.log("!--- Company Deleted Successfully ---!");
          });
        }
        return this.router.navigateByUrl('admin-company');
        
        
    }

    detailsCompany(company  : any){
      this.router.navigateByUrl('details',{state:{id: company.id,described:company.description}});
    }



}
