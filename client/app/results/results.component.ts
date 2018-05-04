import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';
import { Score } from '../shared/models/score.model';
import { DayService } from '../services/day.service';
import { Day } from '../shared/models/day.model';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {

  score = new Score();
  scores: Score[] = [];
  days: any;

  isLoading = true;


  constructor(private scoreService: ScoreService,
              private dayService: DayService) { }

  ngOnInit() {
    this.getScores();
    this.getDays();
  }

  getScores() {
    this.scoreService.getScores().subscribe(
      data => this.scores = data,
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  getDays() {
    this.dayService.getDays().subscribe(
      data => this.days = data[0].day,
      error => console.log(error),
      () => this.isLoading = false,
    );
  }
}
