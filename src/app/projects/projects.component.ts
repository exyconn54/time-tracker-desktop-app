import { Component, OnInit } from '@angular/core';

// Data
import { projects } from '../../data/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: any = projects;
  
  constructor() { }

  ngOnInit(): void {
  }

  getPercentage(a: number, b: number): number {
    if (a < b) {
      return (a/b)*100;
    }
    return 0;
  }
}
