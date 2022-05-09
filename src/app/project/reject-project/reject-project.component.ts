import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-reject-project',
  templateUrl: './reject-project.component.html',
  styleUrls: ['./reject-project.component.css']
})
export class RejectProjectComponent implements OnInit {
idProject:number;
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.rejectProject(this.idProject).subscribe(res=>{console.log(res);});
  }

}
