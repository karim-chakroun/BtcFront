import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService,private cookieService: CookieService,private toastr: ToastrService, public snackbar: MatSnackBar,private router: Router,) { }

  formModel = {
    username: '',
    password: ''
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
       // localStorage.setItem('token', res.data);
        this.cookieService.set('token', res.data, 1, '/','localhost', true, "Lax");
       //this.cookieService.set('token', res.data);
       this.router.navigate(['/header'])
  .then(() => {
    window.location.reload();
  });
        this.router.navigateByUrl('/home');
        
      },
      err => {
        if (err.status != 200) {
          this.snackbar.open("Incorrect username or password.", "try again");
            // this.toastr.error('Incorrect username or password.', 'Authentication failed.');
          this.router.navigateByUrl('/user/login');
          
        }
       //this.snackbar.open('Incorrect username or password.', 'Close', {
    //          duration: 3000,
    //          horizontalPosition: 'right',
    //          verticalPosition: 'top',
    //          panelClass:['redNoMatch']
    //       });
        else
          console.log(err);
      }
    );
  }

}
