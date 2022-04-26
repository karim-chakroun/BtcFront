import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { Router } from '@angular/router';
import { Project } from '../entity/Project';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  

constructor(private router:Router,private service:ProjectService) { }
listProjects : any;

ngOnInit(): void {

this.service.getProjects().subscribe(res=>{console.log(res);

  this.listProjects=res
console});
}
deleteproject(id:number)
{
  this.service.deleteProjectById(id).subscribe(data=>{
    console.log(data);
    this.ngOnInit();
  })
}
}
