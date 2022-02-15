import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { AuthenticationGuard } from './authentication.guard';




const routes: Routes = [
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent},
  {path:'resetPassword/:token',component:ResetPasswordComponent},

  {path:'dashboard',component:DashboardComponent,
  children:[ 
    {path:'notes',component:GetAllNotesComponent}
  ],canActivate:[AuthenticationGuard]
   
  
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
