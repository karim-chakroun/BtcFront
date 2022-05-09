import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Project } from '../entity/Project';
import { ProjectService } from '../project.service';
import { MatDialog } from '@angular/material/dialog';
import { AssignProjectToEntrepriseComponent } from './assign-project-to-entreprise/assign-project-to-entreprise.component';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project : Project = new Project();
  submitted=false;
  listEmployee : any;
  selectedEmployee:number;
  selectedProject:number
  constructor(private router:Router,private service:ProjectService,private employeeService:EmployeeService,private dialog: MatDialog ) { }
  listProjects : any;
  AffectProjectToEmployee(idProject:number){
  
    this.service.affectProjectToEmployee(1,this.selectedEmployee).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    })
   }
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(res=>{console.log(res);
      this.listEmployee=res 
      console});
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
  downloadExcel(){
    this.service.downloadExcel().subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    });
  }
  openDialogEntreprise(){
    const dref = this.dialog.open(AssignProjectToEntrepriseComponent);
     
    dref.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
  }
 
}
