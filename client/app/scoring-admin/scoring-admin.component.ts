import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ScoreService } from '../services/score.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Score } from '../shared/models/score.model';

@Component({
  selector: 'app-scoring-admin',
  templateUrl: './scoring-admin.component.html',
  styleUrls: ['./scoring-admin.component.css'],
})
export class ScoringAdminComponent implements OnInit {

  score = new Score();
  scores: Score[] = [];
  isLoading = true;
  isEditing = false;

  addScoreForm: FormGroup;
  name = new FormControl('', Validators.required);
  scoreDay1 = new FormControl('', Validators.required);
  projectDay1 = new FormControl('', Validators.required);
  scoreDay2 = new FormControl('', Validators.required);
  projectDay2 = new FormControl('', Validators.required);
  scoreDay3 = new FormControl('', Validators.required);
  projectDay3 = new FormControl('', Validators.required);
  status1 = new FormControl('', Validators.required);
  status2 = new FormControl('', Validators.required);
  status3 = new FormControl('', Validators.required);

  constructor(private scoreService: ScoreService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent) { }


  ngOnInit() {
    this.getScores();
    this.addScoreForm = this.formBuilder.group({
      name: this.name,
      scoreDay1: this.scoreDay1,
      projectDay1: this.projectDay1,
      scoreDay2: this.scoreDay2,
      projectDay2: this.projectDay2,
      scoreDay3: this.scoreDay3,
      projectDay3: this.projectDay3,
      status1: this.status1,
      status2: this.status2,
      status3: this.status3,
    });
  }

  getScores() {
    this.scoreService.getScores().subscribe(
      data => this.scores = data,
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  addScore() {
    this.scoreService.addScore(this.addScoreForm.value).subscribe(
      (res) => {
        this.scores.push(res);
        this.addScoreForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  enableEditing(score: Score) {
    this.isEditing = true;
    this.score = score;
  }

  cancelEditing() {
    this.isEditing = false;
    this.score = new Score();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the scores to reset the editing
    this.getScores();
  }

  editScore(score: Score) {
    this.scoreService.editScore(score).subscribe(
      () => {
        this.isEditing = false;
        this.score = score;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  deleteScore(score: Score) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.scoreService.deleteScore(score).subscribe(
        () => {
          const pos = this.scores.map(elem => elem._id).indexOf(score._id);
          this.scores.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error),
      );
    }
  }

}
