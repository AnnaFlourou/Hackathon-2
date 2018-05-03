import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Score } from '../shared/models/score.model';

@Injectable()
export class ScoreService {

  constructor(private http: HttpClient) { }

  getScores(): Observable<Score[]> {
    return this.http.get<Score[]>('/api/scores');
  }

  countScores(): Observable<number> {
    return this.http.get<number>('/api/scores/count');
  }

  addScore(score: Score): Observable<Score> {
    return this.http.post<Score>('/api/score', score);
  }

  getScore(score: Score): Observable<Score> {
    return this.http.get<Score>(`/api/score/${score._id}`);
  }

  editScore(score: Score): Observable<string> {
    return this.http.put(`/api/score/${score._id}`, score, { responseType: 'text' });
  }

  deleteScore(score: Score): Observable<string> {
    return this.http.delete(`/api/score/${score._id}`, { responseType: 'text' });
  }

}
