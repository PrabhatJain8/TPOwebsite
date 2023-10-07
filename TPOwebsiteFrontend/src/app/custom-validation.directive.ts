import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { CompanyService } from './company.service';

@Directive({
  selector: '[appCustomValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomValidationDirective, multi: true}]
})
export class CustomValidationDirective {

  constructor(public companyservice: CompanyService) { }
  
  register:any={
    name:"",
    reg_no:"",
    college_email:"",
    password:"",
    confirm_password:""
  }
  user:any;
  
  validate(control: AbstractControl){
    // this.register.name=control.value;
    // this.register.college_email=control.value;
    
    // this.companyservice.checkAlreadyExist(this.register).subscribe({
    //   next: ()=>{this.user=""},
    //   error: (err)=>{
    //     if(err.error=="User"){
    //       this.user="User";
        
    //     }
    //     else if(err.error=="Email"){
    //       this.user="Email"
          
    //     }  
        
    //   }
    // });
    
    
    // if(this.user=="User"){
    //   return {
    //     userNameExist:true
    //   } 
    //   }
    // else if(this.user=="Email"){
    //     return{
    //       emailExist:true
    //     }
    //   }
    
    return null;
    
  }


}
