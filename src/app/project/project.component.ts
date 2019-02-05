import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { projects } from '../project-list'
import { Project } from '../myProjects'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  myUrl = 'https://api.github.com/users/raviconsul/repos';
  users: Project[];
  selected: boolean = false;
  currentId: number;
  currentName: string;
  currentDescription: string;
  currentTech: string;
  githubURL = `https://github.com/raviconsul`;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.users = projects;
  }

  selectMe(i: Project){
    if (this.currentId == i.id){
      this.selected = !this.selected;
    }else{
      this.currentId = i.id;
      this.selected = true;
      this.currentName = i.name;
      this.currentDescription = i.description;
      this.currentTech = i.techUsed;      
    }
  }

  viewGithub(){
    window.open(this.githubURL, "_blank");
  }

}
