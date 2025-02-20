import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewFormComponent } from './review-form.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, // Import this to enable *ngFor
    ReactiveFormsModule
  ],
  exports: []
})
export class ReviewFormModule { }
