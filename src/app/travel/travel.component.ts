import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTravelComponent } from '../add-travel/add-travel.component';
import { TravelService } from '../shared/travel.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  constructor(private service:TravelService,public dialog: MatDialog) { }

  travels:any;
  ngOnInit(): void {

    this.service.getTravels().subscribe(
      res =>{
        this.travels = res;
      },
      err =>{
        console.log(err);
      }

    );
  }

  openDialog() {
    const dref = this.dialog.open(AddTravelComponent);
    
    dref.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
  }

}
