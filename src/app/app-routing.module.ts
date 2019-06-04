import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseContentComponent } from './course-content/course-content.component';


const routes: Routes = [

  {
      path: 'courses/:id',
      component: CourseContentComponent
  },
  {
      path: "**",
      redirectTo: '/'
  }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
