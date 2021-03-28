import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddIssueComponent } from './add-issue.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [AddIssueComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class AddIssueModule { }
