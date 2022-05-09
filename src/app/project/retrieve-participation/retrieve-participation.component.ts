import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-retrieve-participation',
  templateUrl: './retrieve-participation.component.html',
  styleUrls: ['./retrieve-participation.component.css']
})
export class RetrieveParticipationComponent implements OnInit {
  constructor(private projectService:ProjectService) { }
  listProjects : any;
  
  ngOnInit(): void {
  
  this.projectService.retrieveParticipations().subscribe(res=>{console.log(res);
  
    this.listProjects=res
  console});
  }

}
