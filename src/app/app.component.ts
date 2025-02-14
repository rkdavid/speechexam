import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  menus: any = [];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menus = this.router.config; // get all routes
  }

}
