import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson, Course } from '../model/classes';
import { CourseService } from '../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent implements OnInit {

  //  lessons: Lesson[];
  courseId: string;
  // courseTitle: string;
  course: Course;

  constructor(private courseService: CourseService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('id');
    });


    /* this.courseService.getCourseContent(this.courseId).pipe(first()).subscribe((course: Course) => {
       this.lessons = course.lessons;
       this.courseTitle = course.name;
     });*/

    this.courseService.getCourseContent(this.courseId).pipe(first()).subscribe((course: Course) => {
      this.course = course;
    });
  }

}
