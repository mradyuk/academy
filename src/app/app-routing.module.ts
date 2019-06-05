import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseContentComponent } from './course-content/course-content.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent

  },
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
