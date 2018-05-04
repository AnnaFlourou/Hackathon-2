import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Day } from '../shared/models/day.model';

@Injectable()
export class DayService {

  constructor(private http: HttpClient) { }

  getDays(): Observable<Day[]> {
    return this.http.get<Day[]>('/api/days');
  }

  countDays(): Observable<number> {
    return this.http.get<number>('/api/days/count');
  }

  addDay(day: Day): Observable<Day> {
    return this.http.post<Day>('/api/day', day);
  }

  getDay(day: Day): Observable<Day> {
    return this.http.get<Day>(`/api/day/${day._id}`);
  }

  editDay(day: Day): Observable<string> {
    return this.http.put(`/api/day/${day._id}`, day, { responseType: 'text' });
  }

  deleteDay(day: Day): Observable<string> {
    return this.http.delete(`/api/day/${day._id}`, { responseType: 'text' });
  }

}
