import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.scss']
})
export class GoBackComponent implements OnInit {

  goBack(): void {
    this.location.back();
  }

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

}
