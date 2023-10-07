import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent {

    Eligibility: any = {};

    constructor(private router: Router){
      this.Eligibility = (this.router.getCurrentNavigation()?.extras.state);
      console.log(this.Eligibility);
    }

}
