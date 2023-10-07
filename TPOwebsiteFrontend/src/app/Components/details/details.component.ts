import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/company.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

    company :any={};
    
    constructor(private activeRoute : ActivatedRoute,private companyservice: CompanyService,private router  : Router){
      this.company=(this.router.getCurrentNavigation()?.extras.state);
      // console.log(this.company);
    }
    ngOnInit(){
      
      
      
    }
}
