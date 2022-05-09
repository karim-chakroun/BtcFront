import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from 'src/app/entity/Entreprise';
import { Project } from 'src/app/entity/Project';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  project : Project = new Project();
  submitted=false;
 
    constructor(private router:Router,private service:ProjectService) { }
    addProject(){
      this.service.addProject(this.project).subscribe(data=>{console.log(this.project) 
      this.project=new Project()});
      };
    ngOnInit(): void {
     this.submitted=false;
     this.project=new Project();
    
    }
    onSubmit(){
      this.submitted=true ;
      this.addProject();
    }
  

}
