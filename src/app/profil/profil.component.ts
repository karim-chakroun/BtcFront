import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '../shared/image.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private router:Router,private service:UserService,private httpClient: HttpClient,private imageService:ImageService) { }

  dbImage: any; 
  postResponse: any;
  successResponse: string;
  image: any;
  uploadedImage: File; 

  userDetails:any;

  ngOnInit(): void {

    this.service.getUserProfile().subscribe(
      res =>{
        this.userDetails = res,
        this.imageService.getImage(this.userDetails.imageName).subscribe(
          res =>{
            this.postResponse = res;          
                this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
          }
    
        );
      },
      err =>{
        console.log(err);
      }

    );

    
  }

  public onImageUpload(event) {    
    this.uploadedImage = event.target.files[0];
  }

  imageUploadAction() {    
    const imageFormData = new FormData();
    imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);
  

    this.httpClient.post('http://localhost:8089/SpringMVC/upload/image/' + this.userDetails.idClient , imageFormData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) { 
          this.postResponse = response;                
          this.successResponse = this.postResponse.body.message;
        } else {
          this.successResponse = 'Image not uploaded due to some error!';
        }
      }
      );
    }

    viewImage() {
      this.httpClient.get('http://localhost:8089/SpringMVC/get/image/info/' + this.userDetails.imageName)
        .subscribe(
          res => {
            this.postResponse = res;          
           // this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
           return 'data:image/jpeg;base64,' + this.postResponse.image;
          }
        );
    }

}
