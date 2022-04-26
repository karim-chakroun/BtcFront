import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { TravelService } from '../shared/travel.service';

@Component({
  selector: 'app-travel-employee',
  templateUrl: './travel-employee.component.html',
  styleUrls: ['./travel-employee.component.css']
})
export class TravelEmployeeComponent implements OnInit {

  constructor(private service:TravelService,public dialog: MatDialog) { }

  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};

  travels:any;
  ngOnInit(): void {

    this.service.getTravels().subscribe(
      res =>{
        this.travels = res;
        this.dtTrigger.next();
      },
      err =>{
        console.log(err);
      }

    );
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  

  Participate(){
    
  }

}
