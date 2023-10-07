import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddCompanyComponent } from './Components/Admin/add-company/add-company.component';
import { EditCompanyComponent } from './Components/Admin/edit-company/edit-company.component';
import { ListCompanyComponent } from './Components/Admin/list-company/list-company.component';
import { DetailsComponent } from './Components/details/details.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ListCompanyStudentsComponent } from './Components/Student/list-company-students/list-company-students.component';
import { UpcomingListComponent } from './Components/Upcoming/upcoming-list/upcoming-list.component';
import { UpcomingAddComponent } from './Components/Upcoming/upcoming-add/upcoming-add.component';
import { DescriptionComponent } from './Components/Upcoming/description/description.component';
import { EligibilityComponent } from './Components/Upcoming/eligibility/eligibility.component';
import { StudentUpcomingComponent } from './Components/Upcoming/student-upcoming/student-upcoming.component';
import { PastListComponent } from './Components/Past/past-list/past-list.component';
import { CommentsComponent } from './Components/Past/comments/comments.component';
import { EnrolledComponent } from './Components/Upcoming/enrolled/enrolled.component';
import { EnrolledStudentComponent } from './Components/Upcoming/enrolled-student/enrolled-student.component';
import { EnrolledAdminComponent } from './Components/Upcoming/enrolled-admin/enrolled-admin.component';
import { EnrolledListAComponent } from './Components/Upcoming/enrolled-list-a/enrolled-list-a.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { VerifyComponent } from './Components/verify/verify.component';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { ChangeForgotPasswordComponent } from './Components/change-forgot-password/change-forgot-password.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'verify',component:VerifyComponent},
  {path:'forgot-password',component:ForgotComponent},
  {path:'change-forgot-password',component:ChangeForgotPasswordComponent},
  {path:'student-company',component:ListCompanyStudentsComponent,canActivate:[AuthGuard]},
  {path:'admin-company',component:ListCompanyComponent,canActivate: [AuthGuard]},
  {path:'details',component:DetailsComponent,canActivate:[AuthGuard] },
  {path: 'add-company',component:AddCompanyComponent,canActivate:[AuthGuard]},
  {path:'edit-company/:id',component:EditCompanyComponent,canActivate:[AuthGuard]},
  {path: 'upcoming-list',component:UpcomingListComponent, canActivate:[AuthGuard]},
  {path:'description',component:DescriptionComponent,canActivate:[AuthGuard]},
  {path:'eligibility',component:EligibilityComponent,canActivate:[AuthGuard]},
  {path:'upcoming-add',component:UpcomingAddComponent,canActivate:[AuthGuard]},
  {path:'student-upcoming',component:StudentUpcomingComponent,canActivate:[AuthGuard]},
  {path:'past-list',component:PastListComponent,canActivate:[AuthGuard]},
  {path:'comments',component:CommentsComponent,canActivate:[AuthGuard]},
  {path: 'enroll',component:EnrolledComponent,canActivate:[AuthGuard]},
  {path:'enrolled-student',component:EnrolledStudentComponent,canActivate:[AuthGuard]},
  {path:'enrolled-admin',component:EnrolledAdminComponent,canActivate:[AuthGuard]},
  {path:'enrolled-list',component:EnrolledListAComponent,canActivate:[AuthGuard]},
  {path:'change-password',component:ChangePasswordComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
