import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppRoutes} from "../enums/app-routes.enum";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToSettings(): void {
    this.router.navigate([`/${AppRoutes.SETTINGS}`]);
  }

}
