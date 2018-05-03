import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

import { TeamService } from '../services/team.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Team } from '../shared/models/team.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {

  team = new Team();
  teams: Team[] = [];
  isLoading = true;
  isEditing = false;

  addTeamForm: FormGroup;
  name = new FormControl('', Validators.required);
  country = new FormControl('', Validators.required);
  school = new FormControl('', Validators.required);
  members1 = new FormControl('', Validators.required);
  members2 = new FormControl('', Validators.required);
  members3 = new FormControl('', Validators.required);
  members4 = new FormControl('', Validators.required);


  constructor(private teamService: TeamService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getTeams();
    this.addTeamForm = this.formBuilder.group({
      name: this.name,
      country: this.country,
      school: this.school,
      members1: this.members1,
      members2: this.members2,
      members3: this.members3,
      members4: this.members4,
    });
  }

  getTeams() {
    this.teamService.getTeams().subscribe(
      data => this.teams = data,
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  addTeam() {
    const team = new Team();
    team.name = this.addTeamForm.value.name;
    team.country = this.addTeamForm.value.country;
    team.school = this.addTeamForm.value.school;
    team.members = [
      this.addTeamForm.value.members1,
      this.addTeamForm.value.members2,
      this.addTeamForm.value.members3,
      this.addTeamForm.value.members4,
    ];

    this.addTeamForm.value.name = team.name;
    this.addTeamForm.value.country = team.country;
    this.addTeamForm.value.school = team.school;
    this.addTeamForm.value.members = team.members;

    this.teamService.addTeam(this.addTeamForm.value).subscribe(
      (res) => {
        this.teams.push(res);
        this.addTeamForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  enableEditing(team: Team) {
    this.isEditing = true;
    this.team = team;
  }

  cancelEditing() {
    this.isEditing = false;
    this.team = new Team();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the teams to reset the editing
    this.getTeams();
  }

  editTeam(team: Team) {
    this.teamService.editTeam(team).subscribe(
      () => {
        this.isEditing = false;
        this.team = team;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  deleteTeam(team: Team) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.teamService.deleteTeam(team).subscribe(
        () => {
          const pos = this.teams.map(elem => elem._id).indexOf(team._id);
          this.teams.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error),
      );
    }
  }

}
