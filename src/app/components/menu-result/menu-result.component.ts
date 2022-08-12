import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-result',
  templateUrl: './menu-result.component.html',
  styleUrls: ['./menu-result.component.scss']
})
export class MenuResultComponent implements OnInit {

  constructor(private _router: Router,) { }

  ngOnInit(): void {
  }

}
