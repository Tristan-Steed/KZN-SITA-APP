import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReviewFormComponent } from './review-form/review-form.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, title: 'dashboard' },
  { path: 'Review', component: ReviewFormComponent, title: 'Review'}
];