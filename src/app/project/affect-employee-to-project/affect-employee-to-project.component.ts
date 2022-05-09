import { Component, OnInit } from '@angular/core';

import { EmployeeService } from 'src/app/employee.service';
import { Project } from 'src/app/entity/Project';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-affect-employee-to-project',
  templateUrl: './affect-employee-to-project.component.html',
  styleUrls: ['./affect-employee-to-project.component.css']
})
export class AffectEmployeeToProjectComponent implements OnInit {
  project : Project = new Project();
  submitted=false;
  listEmployee : any;
  selectedEmployee:number;
  selectedProject:number
  constructor(private service:ProjectService, private employeeService:EmployeeService) { }
  AffectProjectToEmployee(){
  
     this.service.affectProjectToEmployee(this.selectedProject,this.selectedEmployee).subscribe(data=>{console.log(this.project) 
     this.project=new Project()});
     this.ngOnInit;
    };
  ngOnInit(): void {
   this.employeeService.getEmployees().subscribe(res=>{console.log(res);
    this.listEmployee=res 
    console});
   this.project=new Project();
   
  
  }
  

}
