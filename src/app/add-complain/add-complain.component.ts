import { Component, OnInit } from '@angular/core';
import { Complain } from '../complain';
import { ComplainService } from '../complain.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';  

@Component({
  selector: 'app-add-complain',
  templateUrl: './add-complain.component.html',
  styleUrls: ['./add-complain.component.css']
})
export class AddComplainComponent implements OnInit {

  constructor(private Complainservice:ComplainService) { }
  complain : Complain=new Complain(); 
  submitted = false;   
  ngOnInit(): void {
    this.submitted=false;  
    this.complain=new Complain();
  }
  save() {
    this.Complainservice
    .createComplain(this.complain).subscribe(data => {
      console.log(this.complain)
      this.complain = new Complain();
      
    }, 
    error => console.log(error));
  }
    
  onSubmit() {
    this.submitted = true;
    this.save();    
  }

 
  
 

}
