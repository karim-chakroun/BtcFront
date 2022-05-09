import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from 'src/app/entity/Entreprise';
import { Project } from 'src/app/entity/Project';
import { EntrepriseService } from 'src/app/entreprise.service';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-assign-project-to-entreprise',
  templateUrl: './assign-project-to-entreprise.component.html',
  styleUrls: ['./assign-project-to-entreprise.component.css']
})
export class AssignProjectToEntrepriseComponent implements OnInit {
  project : Project = new Project();
  entreprise:Entreprise;
  submitted=false;
  listEntreprise : any;
  selectedEntreprise:number;
  constructor(private router:Router,private service:ProjectService, private serviceEntreprise:EntrepriseService) { }
  addAssignProject(){
  
     this.service.AssignProjectToEntreprise(this.project,this.selectedEntreprise).subscribe(data=>{console.log(this.project) 
    
      this.service.formModel.reset();
      this.project=new Project()});
     this.ngOnInit;
    };
  ngOnInit(): void {
   this.serviceEntreprise.getEntreprises().subscribe(res=>{console.log(res);
    this.listEntreprise=res 
    console});
   this.project=new Project();
   
  
  }
  

}
