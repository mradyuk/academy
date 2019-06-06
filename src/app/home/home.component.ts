import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/classes';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = '';

  courses$: Observable<Course[]>;

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {

  //  this.courses$ = this.courseService.loadCourses('./assets/courses.json');

  this.courses$ =  this.courseService.courses$;

  }
}
