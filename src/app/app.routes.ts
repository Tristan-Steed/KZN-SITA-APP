import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, title: 'dashboard' },
  { path: 'Review', component: ReviewFormComponent, title: 'Review'},
  { path: 'TopMenu', component: TopMenuComponent, title: 'TopMenu'},
  { path: 'SideMenu', component: SideMenuComponent, title: 'SideMenu'}
];