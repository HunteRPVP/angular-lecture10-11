import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { AboutModule } from './about/about.module';
import { ProjectsModule } from './projects/projects.module';
import { ReclitModule } from './reclit/reclit.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { IssuesModule } from './issues/issues.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    AboutModule,
    ProjectsModule,
    ReclitModule,
    BrowserAnimationsModule,
    MatIconModule,
    IssuesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
