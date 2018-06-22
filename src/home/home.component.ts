import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomePageComponent implements OnInit {
  private selectedId: number;

  constructor() { }

  ngOnInit() {

  }
}
