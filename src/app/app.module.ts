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
import { PostComponent } from './post/post.component';
import { AddpostsComponent } from './addposts/addposts.component';
import { TravelComponent } from './travel/travel.component';
import { AddTravelComponent } from './add-travel/add-travel.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { InvitationComponent } from './invitation/invitation.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { DataTableModule } from "ng2-data-table";
import {DataTablesModule} from 'angular-datatables';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


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
    FontAwesomeModule,
    MatProgressSpinnerModule,
    MatListModule,
    DataTablesModule,
    MatSelectModule,
    HttpClientModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
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
