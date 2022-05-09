import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Project } from 'src/app/entity/Project';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-add-prime',
  templateUrl: './add-prime.component.html',
  styleUrls: ['./add-prime.component.css']
})
export class AddPrimeComponent implements OnInit {
  project : Project = new Project();
  selectedEmployee:number;
  listEmployee:any;
  constructor(private service:ProjectService, private employeeService:EmployeeService) { }
addPrime()
{ this.service.addPrime(this.selectedEmployee).subscribe(data=>{console.log(this.project) 
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
