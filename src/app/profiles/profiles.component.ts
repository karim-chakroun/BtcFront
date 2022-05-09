import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../models/Client';
import { ImageService } from '../shared/image.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  constructor(private ac:ActivatedRoute,private service:UserService,private imageService:ImageService) { }
  myParam:number;
  user:Client;
  dbImage: any; 
  postResponse: any;
  successResponse: string;
  image: any;
  uploadedImage: File;
  ngOnInit(): void {

    this.ac.paramMap.subscribe(
      res=>{
        this.myParam=Number(res.get('id')),
        this.service.searchByid(this.myParam).subscribe(
          result =>{
            this.user = result,
            this.imageService.getImage(this.user.imageName).subscribe(
              res =>{
                this.postResponse = res;          
                    this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
              }
        
            );
          },
          err =>{
            //console.log(err);
          }
    
        );
        });
    
    
  }

}
