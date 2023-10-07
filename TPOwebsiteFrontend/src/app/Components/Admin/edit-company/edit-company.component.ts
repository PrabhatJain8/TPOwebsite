import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent {
  company :any={};
    constructor(private activeRoute : ActivatedRoute,private companyservice: CompanyService,private router:Router){

    }
    ngOnInit(){
      var id=this.activeRoute.snapshot.params['id'];
      console.log(id);
      this.companyservice.GetCompanyByID(id).subscribe((res)=>{
        this.company =res;
      })
    }

    onSubmit()
    {
      var id=this.activeRoute.snapshot.params['id'];
      this.companyservice.UpdateCompany(this.company,id).subscribe(()=>{
        this.router.navigateByUrl('/admin-company');
;      })
    }
}
