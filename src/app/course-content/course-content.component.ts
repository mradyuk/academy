import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson, Course } from '../model/classes';
import { CourseService } from '../services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent implements OnInit {

  lessons: Lesson[];
  courseId: string;

  constructor(private courseService: CourseService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('id')
    })

    this.courseService.loadCourseById('./assets/courses.json', this.courseId).subscribe((course: Course) => {
      this.lessons = course.lessons;
    });
  }

}
