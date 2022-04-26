import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { InvitationComponent } from './invitation/invitation.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { PostComponent } from './post/post.component';
import { ProfilComponent } from './profil/profil.component';

import { AddProjectComponent } from './project/add-project/add-project.component';
import { ProjectComponent } from './project/project.component';

import { TravelComponent } from './travel/travel.component';

import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';
import { ComplainListComponent } from './complain-list/complain-list.component';
import { AddComplainComponent } from './add-complain/add-complain.component';
const routes: Routes = [


  {path:'user',component:UserComponent,
  children:[
    {path:'registration',component:RegistrationComponent},
    {path:'login',component:LoginComponent}
  ]},
  {path:'home',component:HomeComponent},
  {path:'profil',component:ProfilComponent},

  {path:'projects', component:ProjectComponent},
  {path:'addproject',component:AddProjectComponent},


  {path:'complainList',component:ComplainListComponent},
  {path:'addcomplain',component:AddComplainComponent},

  {path:'post',component:PostComponent},
  {path:'travel',component:TravelComponent},
  {path:"changePassword/:id", component:ChangePasswordComponent},
  {path:'invitations',component:InvitationsComponent},

  {path:"invitation/:id", component:InvitationComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
