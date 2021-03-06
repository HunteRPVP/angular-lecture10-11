import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainComponent,
    loadChildren: './main/main.module#MainModule',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
    loadChildren: './about/about.module#AboutModule',
    pathMatch: 'full',
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    loadChildren: './projects/projects.module#ProjectsModule',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
