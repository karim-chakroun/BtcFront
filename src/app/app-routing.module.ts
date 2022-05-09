import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { BestpostComponent } from './bestpost/bestpost.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

import { HomeComponent } from './home/home.component';
import { InvitationComponent } from './invitation/invitation.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { PostComponent } from './post/post.component';
import { ProfilComponent } from './profil/profil.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';
import { TravelEmployeeComponent } from './travel-employee/travel-employee.component';
import { TravelComponent } from './travel/travel.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'user',component:UserComponent,
  children:[
    {path:'registration',component:RegistrationComponent},
    {path:'login',component:LoginComponent}
  ]},
  {path:'home',component:HomeComponent},
  
  {path:'profil',component:ProfilComponent,canActivate:[AuthGuard]},
  {path:'post',component:PostComponent},
  {path:'travel',component:TravelComponent ,canActivate:[AuthGuard],data :{permittedRoles:['ROLE_ENTREPRISE'] }},
  {path:'travelEmployee',component:TravelEmployeeComponent ,canActivate:[AuthGuard],data :{permittedRoles:['ROLE_EMPLOYEE'] }},
  {path:"changePassword/:id", component:ChangePasswordComponent},
  {path:'invitations',component:InvitationsComponent,canActivate:[AuthGuard],data :{permittedRoles:['ROLE_ENTREPRISE'] }},
  {path:"invitation/:id", component:InvitationComponent},
  {path:"mostlikedpost", component:BestpostComponent},
  {path:"userSearch/:name", component:SearchUserComponent},
  {path:"profiles/:id", component:ProfilesComponent},
  {path:"travelDetails/:id", component:TravelDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
