import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  issues;

  constructor(private http: HttpClient, public router: Router) { }

  getIssues(): Observable<any> {
    return this.http.get('https://api.github.com/repos/HunteRPVP/angular-lecture10-11/issues')
  }
  
  lockIssue(issueNumber): void {
    this.http.put('https://api.github.com/repos/HunteRPVP/angular-lecture10-11/issues/' + issueNumber + '/lock', {
      owner: 'HunteRPVP',
      repo: 'angular-lecture10-11',
      issue_number: issueNumber,
      lock_reason: 'resolved'
    }).subscribe((data) => {
      console.log(data);
    });

    this.http.patch('https://api.github.com/repos/HunteRPVP/angular-lecture10-11/issues/' + issueNumber, {
      owner: 'HunteRPVP',
      repo: 'angular-lecture10-11',
      issue_number: issueNumber,
      state: 'closed'
    }).subscribe((data) => {
      console.log(data);
    });
  }

  addComment(issueNumber, body): void {
    console.log(issueNumber, body);
    this.http.post('https://api.github.com/repos/HunteRPVP/angular-lecture10-11/issues/' + issueNumber + '/comments', {
      owner: 'HunteRPVP',
      repo: 'angular-lecture10-11',
      issue_number: issueNumber,
      body: body
    }).subscribe((data) => {
      console.log(data);
    });
    this.router.navigate(['issues']);
  }

  addIssue(title, body): void {
    this.http.post('https://api.github.com/repos/HunteRPVP/angular-lecture10-11/issues', {
      owner: 'HunteRPVP',
      repo: 'angular-lecture10-11',
      title: title,
      body: body}).subscribe((data) => {
      console.log(data);
    });
    this.router.navigate(['issues']);
  }
}
