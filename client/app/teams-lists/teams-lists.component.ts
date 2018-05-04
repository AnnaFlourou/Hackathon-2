import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { Team } from '../shared/models/team.model';

@Component({
  selector: 'app-teams-lists',
  templateUrl: './teams-lists.component.html',
  styleUrls: ['./teams-lists.component.css'],
})
export class TeamsListsComponent implements OnInit {

  constructor(private teamService: TeamService) { }
  team = new Team();
  teams: Team[] = [];
  isLoading = true;

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teamService.getTeams().subscribe(
      data => this.teams = data,
      error => console.log(error),
      () => this.isLoading = false,
    );
  }
}
