import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Team } from '../team';
import { Cyclist } from '../cyclist';
import { TeamService }  from '../team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
  team: Team;
  cyclists: Cyclist[];

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.getTeam()
    this.getCyclistsTeam()
  }

  getTeam(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getTeam(id)
      .subscribe(team => this.team = team);
  }

  getCyclistsTeam(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getCyclistsTeam(id)
      .subscribe(cyclist => this.cyclists = cyclist);
  }
}
