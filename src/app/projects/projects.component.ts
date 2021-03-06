import { Component, OnInit } from '@angular/core';

import * as projects from '../../assets/projects.json'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projArr = [];

  constructor() {
    projects.projects.forEach(project => {
      this.projArr.push(project);
    });
  }

  ngOnInit(): void {
  }

}
