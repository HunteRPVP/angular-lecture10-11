import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesComponent } from './issues.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AddIssueModule } from './add-issue/add-issue.module';
import { AddCommentModule } from './add-comment/add-comment.module';
import { IssuesRoutingModule } from './issues-routing.module';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './test/test.component';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [IssuesComponent, ProfileComponent, TestComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    AddIssueModule,
    AddCommentModule,
    IssuesRoutingModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    MatSortModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class IssuesModule { }
