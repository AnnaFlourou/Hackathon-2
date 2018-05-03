import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';
import { Score } from '../shared/models/score.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {

  score = new Score();
  scores: Score[] = [];
  isLoading = true;


  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    this.getScores();
  }

  getScores() {
    this.scoreService.getScores().subscribe(
      data => this.scores = data,
      error => console.log(error),
      () => this.isLoading = false,
    );
  }
}
