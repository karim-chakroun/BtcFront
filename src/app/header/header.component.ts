import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService,public service:UserService) { }

  userDetails:any;

  ngOnInit(): void {

    if(localStorage.getItem('token') != null){

      this.service.getUserProfile().subscribe(
        res =>{
          this.userDetails = res;
        },
        err =>{
          console.log(err);
        }
  
      );

    }

    
  }

  onLogout() {
    localStorage.removeItem('token');
    //this.cookieService.delete("token", '/');
    
    
    this.router.navigate(['/user/login']);
    
    // var v = document.getElementById('admin');
     //  var v2 = document.getElementById('admin2');
      // v.style.visibility = 'hidden';
   // v2.style.visibility = 'hidden';
    // var f = document.getElementById('loginBtn');
       //f.style.visibility = 'hidden';
  }

}
