import { Component, OnInit } from '@angular/core';
import { Cyclist } from '../cyclist';
import { CyclistService } from '../cyclist.service';


@Component({
  selector: 'app-cyclists',
  templateUrl: './cyclists.component.html',
  styleUrls: ['./cyclists.component.scss']
})
export class CyclistsComponent implements OnInit {
  cyclists: Cyclist[];

  constructor(private cyclistService: CyclistService) { }

  getCyclist(): void {
    this.cyclistService.getCyclists()
      .subscribe(cyclist => this.cyclists = cyclist);
  }

  ngOnInit() {
    this.getCyclist()
  }
  
}
