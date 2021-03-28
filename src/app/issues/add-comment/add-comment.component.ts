import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  issueNumber
  commentForm;
  creatorName;

  constructor(private activatedRoute: ActivatedRoute, fb: FormBuilder, public isService: IssuesService) {
    this.activatedRoute.paramMap
      .pipe(switchMap((params) => params.getAll('isNum')))
      .subscribe((data) => {
        this.issueNumber = data;
    });
    this.activatedRoute.paramMap
      .pipe(switchMap((params) => params.getAll('crName')))
      .subscribe((data) => {
        this.creatorName = data;
        console.log(data);
    });
    this.commentForm = fb.group ({
      comment: fb.control('Привет, ' + this.creatorName + '!\n\n\n\n\n\nСпасибо за обращение!', Validators.required)
    })
   }

  ngOnInit(): void {
  }

}
