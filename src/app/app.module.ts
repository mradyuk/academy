import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatDateFormats,
  MatCardModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule, 
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,

} from '@angular/material';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { CourseLessonComponent } from './course-lesson/course-lesson.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { CourseService } from './services/course.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseContentComponent,
    CourseLessonComponent,
    CoursesCardListComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    // Material
    MatCardModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,  
    MatDatepickerModule,   
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, 
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
   
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
