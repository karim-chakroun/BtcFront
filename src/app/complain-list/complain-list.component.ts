import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { ComplainService } from '../complain.service';    
import { Observable } from "rxjs";  
import { Complain } from '../complain';  
@Component({
  selector: 'app-complain-list',
  templateUrl: './complain-list.component.html',
  styleUrls: ['./complain-list.component.css']
})
export class ComplainListComponent implements OnInit {
  complains: any;
  constructor(private complainservice:ComplainService) { }
  complain : Complain=new Complain();
  ngOnInit(): void {
    this.complainservice.getComplainList().subscribe(data =>{  
      this.complains =data;  
      console.log(this.complains);
      })  
  }

  deletecomplain(id: number) {
    this.complainservice.deleteComplain(id)
      .subscribe(
        data => {
          console.log(data);
          this.ngOnInit();
        });
  }
 
}
