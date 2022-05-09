import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSelectModule} from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './shared/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ProfilComponent } from './profil/profil.component';

import { ComplainListComponent } from './complain-list/complain-list.component';
import { AddComplainComponent } from './add-complain/add-complain.component';

import { PostComponent } from './post/post.component';
import { AddpostsComponent } from './addposts/addposts.component';
import { TravelComponent } from './travel/travel.component';
import { AddTravelComponent } from './add-travel/add-travel.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { InvitationComponent } from './invitation/invitation.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { DataTableModule } from "ng2-data-table";
import { ProjectComponent } from './project/project.component';
import { EmployeeComponent } from './employee/employee.component';
import { TaskComponent } from './task/task.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { AssignProjectToEntrepriseComponent } from './project/assign-project-to-entreprise/assign-project-to-entreprise.component';
import { AffectEmployeeToProjectComponent } from './project/affect-employee-to-project/affect-employee-to-project.component';
import { AddPrimeComponent } from './project/add-prime/add-prime.component';
import { RejectProjectComponent } from './project/reject-project/reject-project.component';
import { DownloadExcelComponent } from './project/download-excel/download-excel.component';
import { SendEmailComponent } from './project/send-email/send-email.component';
import { AssignTaskToEmployeeComponent } from './task/assign-task-to-employee/assign-task-to-employee.component';
import { EndTaskComponent } from './task/end-task/end-task.component';
import  {  RetrieveParticipationComponent} from'./project/retrieve-participation/retrieve-participation.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SyncfusionComponent } from './syncfusion/syncfusion.component';
import { ScheduleModule, RecurrenceEditorModule , WeekService, WorkWeekService,MonthService,MonthAgendaService, DayService} from '@syncfusion/ej2-angular-schedule';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import { MatProgressBarModule } from '@angular/material/progress-bar';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { VoirPlusTaskComponent } from './task/voir-plus-task/voir-plus-task.component';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    ProfilComponent,
    ComplainListComponent,
    AddComplainComponent,
    PostComponent,
    AddpostsComponent,
    TravelComponent,
    AddTravelComponent,
    SidebarComponent,
    AdminNavComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    InvitationComponent,
    InvitationsComponent,
    ProjectComponent,
    EmployeeComponent,
    TaskComponent,
    EntrepriseComponent,
    AddProjectComponent,
    AddTaskComponent,
    AssignProjectToEntrepriseComponent,
    AffectEmployeeToProjectComponent,
    AddPrimeComponent,
    RejectProjectComponent,
    DownloadExcelComponent,
    SendEmailComponent,
    AssignTaskToEmployeeComponent,
    EndTaskComponent,
    RetrieveParticipationComponent,
    SyncfusionComponent,
    VoirPlusTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    HttpClientModule,
    CommonModule,
    MatProgressBarModule,
    FullCalendarModule,
    ScheduleModule, RecurrenceEditorModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModule,
  ],
  providers: [UserService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
