import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Cyclist } from '../cyclist';
import { CyclistService }  from '../cyclist.service';
import { Team } from '../team';

@Component({
  selector: 'app-cyclist-detail',
  templateUrl: './cyclist-detail.component.html',
  styleUrls: ['./cyclist-detail.component.scss']
})
export class CyclistDetailComponent implements OnInit {
  cyclist: Cyclist | Team;
  team: Cyclist | Team;

  constructor(
    private route: ActivatedRoute,
    private cyclistService: CyclistService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCyclist()
  }

  getCyclist(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cyclistService.getCyclist(id)
      .subscribe(item => {
        item.team ? this.cyclist = item : this.team = item;
      });
  }

  goBack(): void {
    this.location.back();
  }
}
