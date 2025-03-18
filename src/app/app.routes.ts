import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalDevelopmentPlanComponent } from './personal-development-plan/personal-development-plan.component';
import { StrategicPlanComponent } from './strategic-plan/strategic-plan.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LoginComponent } from './login/login.component';
import { ApiDisplayComponent } from './api-display/api-display.component';
import { EpmdLevel112Component } from './epmd-level-1-12/epmd-level-1-12.component';
import { EpmdSmsLevel1316Component } from './epmd-sms-13-16/epmd-sms-13-16.component';

export const routes: Routes = [
  { path: 'DashboardComponent', component: DashboardComponent, title: 'dashboard',  },   //canActivate: [AuthGuard]
  { path: '', component: LoginComponent, title: 'Login'},
  { path: 'Review', component: ReviewFormComponent, title: 'Review'},
  { path: 'TopMenu', component: TopMenuComponent, title: 'TopMenu'},
  { path: 'SideMenu', component: SideMenuComponent, title: 'SideMenu'},
  { path: 'PersonalDevelopmentPlan', component: PersonalDevelopmentPlanComponent },
  { path: 'StrategicPlanComponent', component: StrategicPlanComponent },
  { path: 'ApiDisplayComponent', component: ApiDisplayComponent, title: 'ApiDisplay' },
  { path: 'EpmdSmsLevel1316Component', component: EpmdSmsLevel1316Component },
  { path: 'EpmdLevel112Component', component: EpmdLevel112Component, title: 'ApiDisplay' }
  
];


