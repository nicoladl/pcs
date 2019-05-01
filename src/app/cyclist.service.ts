import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Cyclist } from './cyclist';
import { CYCLISTS } from './mock-cyclists';
import { Team } from './team';
import { TEAMS } from './mock-teams';
import { TmplAstBoundAttribute } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CyclistService {

  getCyclists(): Observable<Cyclist[]> {
    this.messageService.add('CyclistService: fetched cyclists');
    return of(CYCLISTS);
  }

  getCyclist(id: number): Observable<Cyclist | Team> {
    this.messageService.add(`CyclistService: fetched cyclist id=${id}`);
    const cyclist = CYCLISTS.find(cyclist => cyclist.id === id);
    const team = TEAMS.find(team => team.id === cyclist.team)
    return of(cyclist, team);
  }

  constructor(private messageService: MessageService) { }
}
