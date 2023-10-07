import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
// mode { get; set; }
//         public string location { get; set; }
//         public string min_CGPA { get; set; }
//         public string min_Percentage { get; set; }
//         public string backlog_Allowed { get; set; }
//         public string description 
export class AddCompanyComponent {
    
  
      company: any = {
        name: '',
        company_Address: '',
        num_Employee: '',
        start_Date: '',
        description:''
      };

    constructor(private companyservice: CompanyService,private router: Router){

    }
    onSubmit()
    {
      console.log(this.company);
          this.companyservice.CreateCompany(this.company).subscribe(()=>{
          console.log("!--- Company Added Successfully ---!");
          this.router.navigateByUrl('/admin-company');

      });
    } 


}
