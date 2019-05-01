import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Team } from './team';
import { Cyclist } from './cyclist';
import { TEAMS } from './mock-teams';
import { CYCLISTS } from './mock-cyclists';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  getCyclistsTeam(id: number): Observable<Cyclist[]> {
    this.messageService.add(`TeamService: fetched cyclists team id=${id}`);
    return of(CYCLISTS.filter(cyclist => cyclist.team === id));
  }

  getTeam(id: number): Observable<Team> {
    this.messageService.add(`TeamService: fetched team id=${id}`);
    return of(TEAMS.find(team => team.id === id));
  }

  constructor(private messageService: MessageService) { }
}
