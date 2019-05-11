import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './langing-home.component.html',
  styleUrls: ['./langing-home.component.css']
})
export class LangingHomeComponent implements OnInit {

  constructor(
    private titleService: Title,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log("Hwww");
  }
}
