import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvitationService } from '../shared/invitation.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {

  constructor(private service:InvitationService,private ac:ActivatedRoute) { }

  myParam: number;

  invitation;
  ngOnInit(): void {

    this.ac.paramMap.subscribe(
      res=>{
        this.myParam=Number(res.get('id')),
        this.service.acceptInvitation(this.myParam).subscribe(
          res=>this.invitation=res
          )});
  }

}
