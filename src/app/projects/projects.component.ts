import { Component, OnInit } from '@angular/core';

import * as projects from '../../assets/projects.json'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projArr = [{}];

  dataSource = projects.lessons;
  displayedColumns: string[] = ['lessonName', 'subtaskName', 'git', 'sb']

  constructor() {}

  ngOnInit(): void {
  }

}
