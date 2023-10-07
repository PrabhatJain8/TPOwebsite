import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCompanyComponent } from './Components/Admin/add-company/add-company.component';
import { ListCompanyComponent } from './Components/Admin/list-company/list-company.component';
import { EditCompanyComponent } from './Components/Admin/edit-company/edit-company.component';
import { ListCompanyStudentsComponent } from './Components/Student/list-company-students/list-company-students.component';
import { DetailsComponent } from './Components/details/details.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ValidateEqualModule } from 'ng-validate-equal';
import { CompanyService } from './company.service';
import { UpcomingListComponent } from './Components/Upcoming/upcoming-list/upcoming-list.component';
import { UpcomingAddComponent } from './Components/Upcoming/upcoming-add/upcoming-add.component';
import { DescriptionComponent } from './Components/Upcoming/description/description.component';
import { EligibilityComponent } from './Components/Upcoming/eligibility/eligibility.component';
import { StudentUpcomingComponent } from './Components/Upcoming/student-upcoming/student-upcoming.component';
import { PastListComponent } from './Components/Past/past-list/past-list.component';
import { CommentsComponent } from './Components/Past/comments/comments.component';
import { DatePipe } from '@angular/common';
import { EnrolledComponent } from './Components/Upcoming/enrolled/enrolled.component';
import { EnrolledStudentComponent } from './Components/Upcoming/enrolled-student/enrolled-student.component';
import { EnrolledAdminComponent } from './Components/Upcoming/enrolled-admin/enrolled-admin.component';
import { EnrolledListAComponent } from './Components/Upcoming/enrolled-list-a/enrolled-list-a.component';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { VerifyComponent } from './Components/verify/verify.component';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { ChangeForgotPasswordComponent } from './Components/change-forgot-password/change-forgot-password.component';
import { CustomValidationDirective } from './custom-validation.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddCompanyComponent,
    ListCompanyComponent,
    EditCompanyComponent,
    ListCompanyStudentsComponent,
    DetailsComponent,
    LoginComponent,
    RegisterComponent,
    UpcomingListComponent,
    UpcomingAddComponent,
    DescriptionComponent,
    EligibilityComponent,
    StudentUpcomingComponent,
    PastListComponent,
    CommentsComponent,
    EnrolledComponent,
    EnrolledStudentComponent,
    EnrolledAdminComponent,
    EnrolledListAComponent,
    ChangePasswordComponent,
    VerifyComponent,
    ForgotComponent,
    ChangeForgotPasswordComponent,
    CustomValidationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ValidateEqualModule,
    Ng2SearchPipeModule
  ],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },JwtHelperService,CompanyService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
