import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../entity/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectsUrl="http://localhost:8089/SpringMVC/project/retrieve-all-project";

  constructor(private http:HttpClient) { }
  getProjects() : Observable<any> {
    return this.http.get<any>(this.projectsUrl);
    }
  addProject(project:Project){
      return this.http.post<Project>("http://localhost:8089/SpringMVC/project/add-projects",project);
      }
      deleteProjectById(id:number){
        return this.http.delete("http://localhost:8089/SpringMVC/project/remove-project/"+id);
        }
}
