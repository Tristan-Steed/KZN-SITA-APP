import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalDevelopmentPlanComponent } from './personal-development-plan/personal-development-plan.component';
import { StrategicDashboardComponent } from './strategic-dashboard/strategic-dashboard.component';
import { StrategicPlanComponent } from './strategic-plan/strategic-plan.component';
import { LoginComponent } from './login/login.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'PersonalDevelopmentPlan', component: PersonalDevelopmentPlanComponent },
  { path: 'StrategicDashboard', component: StrategicDashboardComponent },
  { path: 'StrategicPlanComponent', component: StrategicPlanComponent }
  { path: '', component: DashboardComponent, title: 'dashboard' },
  { path: 'Review', component: ReviewFormComponent, title: 'Review'},
  { path: 'TopMenu', component: TopMenuComponent, title: 'TopMenu'},
  { path: 'SideMenu', component: SideMenuComponent, title: 'SideMenu'}
];