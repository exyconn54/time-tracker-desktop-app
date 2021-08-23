import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Data
import { projects } from '../../../data/projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: any = projects;
  project: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const projectId: any = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.projectById(projectId);
    }
  }

  projectById(id: number) {
    const projectArr = projects.filter((v, i) => {
      return v.id == id;
    });
    const project = projectArr[0];
    if (project) {
      this.project = project;
      return project;
    } else {
      this.router.navigate(['projects']);
      alert('No Project found');
      return null;
    }
  }
}
