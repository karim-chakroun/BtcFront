import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http: HttpClient,private fb: FormBuilder) { }

  formModel = this.fb.group({
   
    Titre: [''],
    Bb: ['']
    
    
  });
  readonly BaseURI = 'http://localhost:8089/SpringMVC';
  getposts(){
    return this.http.get(this.BaseURI+ '/post/retrive-posts');
  }

  addPost(id:any){
    var body = {
      titre: this.formModel.value.Titre,
      body: this.formModel.value.Bb,
      
    };
    return this.http.post(this.BaseURI + '/post/add-post/' + id, body);
  


  }
}
