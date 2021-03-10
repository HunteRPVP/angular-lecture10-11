import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReclitComponent } from './reclit.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [ReclitComponent],
  imports: [
    CommonModule,
    MatTabsModule
  ]
})
export class ReclitModule { }
