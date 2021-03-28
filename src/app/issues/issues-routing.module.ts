import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { AddIssueComponent } from './add-issue/add-issue.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: 'comment/:isNum/:crName',
        component: AddCommentComponent,
        loadChildren: './add-comment/add-comment.module#AddCommentModule',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [RouterModule],
})
export class IssuesRoutingModule {}
