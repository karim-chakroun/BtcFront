import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InvitationService } from '../shared/invitation.service';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css']
})
export class InvitationsComponent implements OnInit {

  constructor(private service:InvitationService,private snackbar:MatSnackBar) { }
  invitations;
  ngOnInit(): void {

    this.service.getInvitations().subscribe(
      res =>{
        this.invitations = res;
      },
      err =>{
        console.log(err);
      }

    );
  }

  resendInvitation(id){
    this.service.ResendInvitation(id).subscribe(
      res =>{
        this.snackbar.open("Invitation sent!", "Ok");
        
      },
      err =>{
        
      }

    );
  }

  sendInvitationsExcel(){
    this.service.sendInvitationsExcel().subscribe(
      res =>{
        this.snackbar.open("Invitations sent!", "Ok");
        this.ngOnInit();
        
      },
      err =>{
        
      }

    );
  }

  

}
