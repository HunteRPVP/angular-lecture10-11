import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IssuesService } from './issues.service';
import { ProfileComponent } from './profile/profile.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { AddIssueComponent } from './add-issue/add-issue.component';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class IssuesComponent implements OnInit, AfterViewInit {

  displayedColumns = ["status", "created_at", "description", "name", "creatorInfo", "actions"];
  dataSource;

  @ViewChild(MatSort) sort: MatSort;

  constructor(public isService: IssuesService, public dialog: MatDialog, public router:Router) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.isService.getIssues().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  openDialog(user) {
    this.dialog.open(ProfileComponent, {
      data: {user: user}
    });
  }

  openAddIssue() {
    this.dialog.open(AddIssueComponent);
  }

  openIssue(issueNum): void {
    window.open("https://github.com/HunteRPVP/angular-lecture10-11/issues/" + issueNum, "_blank")
  }

}
