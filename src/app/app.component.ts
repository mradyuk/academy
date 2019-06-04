import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './model/classes';
import { CourseService } from './services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';

  courses$: Observable<Course[]>;

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {

    this.courses$ = this.courseService.loadCourses('./assets/courses.json');

  }
}
