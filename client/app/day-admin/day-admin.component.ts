import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { DayService } from '../services/day.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Day } from '../shared/models/day.model';

@Component({
  selector: 'app-day-admin',
  templateUrl: './day-admin.component.html',
  styleUrls: ['./day-admin.component.css'],
})
export class DayAdminComponent implements OnInit {

  day = new Day();
  days: Day[] = [];
  isLoading = true;
  isEditing = false;

  addDayForm: FormGroup;
  currentDay = new FormControl('', Validators.required);


  constructor(private dayService: DayService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent) { }


  ngOnInit() {
    this.getDays();
    this.addDayForm = this.formBuilder.group({
      day: this.day,
    });
  }

  getDays() {
    this.dayService.getDays().subscribe(
      data => this.days = data,
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  addDay() {
    this.dayService.addDay(this.addDayForm.value).subscribe(
      (res) => {
        this.days.push(res);
        this.addDayForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  enableEditing(day: Day) {
    this.isEditing = true;
    this.day = day;
  }

  cancelEditing() {
    this.isEditing = false;
    this.day = new Day();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the days to reset the editing
    this.getDays();
  }

  editDay(day: Day) {
    this.dayService.editDay(day).subscribe(
      () => {
        this.isEditing = false;
        this.day = day;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  deleteDay(day: Day) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.dayService.deleteDay(day).subscribe(
        () => {
          const pos = this.days.map(elem => elem._id).indexOf(day._id);
          this.days.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error),
      );
    }
  }

}
