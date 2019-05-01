import { Component, OnInit } from '@angular/core';
import { Cyclist } from '../cyclist';
import { CyclistService } from '../cyclist.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cyclists: Cyclist[] = [];
  
  constructor(private cyclistService: CyclistService) { }

  getCyclist(): void {
    this.cyclistService.getCyclists()
      .subscribe(cyclist => this.cyclists = cyclist);
  }

  ngOnInit() {
    this.getCyclist()
  }

}
