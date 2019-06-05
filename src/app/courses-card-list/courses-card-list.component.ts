import { Component, OnInit, Input } from '@angular/core';

import {Course} from '../model/classes';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {

  @Input()
  courses: Course[];

  constructor(private router: Router) { }

  ngOnInit() {

  }

  navigate(id: string){
    this.router.navigate(['/courses', id])
  }

}
