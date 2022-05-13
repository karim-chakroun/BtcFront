import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient,private fb: FormBuilder) { }
  formModel = this.fb.group({
   
    
    Bb: ['', Validators.required]
    
    
  });
  readonly BaseURI = 'http://localhost:8089/SpringMVC';
 
  addNote(id:any,id2){
    var body = {
      
      note: this.formModel.value.Bb,
      
    };
    return this.http.post(this.BaseURI + '/reaction/add-reaction/' + id+'/'+id2, body);
  


  }
  getNote(){
    return this.http.get(this.BaseURI+ '/reaction/retrieve-all-reactions');
  }
}
