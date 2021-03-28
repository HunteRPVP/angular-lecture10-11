import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css'],
})
export class AddIssueComponent implements OnInit {

  issueForm;

  constructor(fb: FormBuilder, public isService: IssuesService) {
    this.issueForm = fb.group ({
      title: fb.control('', Validators.required),
      body: fb.control('', Validators.required)
    })
  }

  ngOnInit(): void {}
}
