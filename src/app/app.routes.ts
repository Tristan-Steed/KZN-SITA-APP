import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PersonalDevelopmentPlanComponent } from './personal-development-plan/personal-development-plan.component';
import { StrategicDashboardComponent } from './strategic-dashboard/strategic-dashboard.component';
import { StrategicPlanComponent } from './strategic-plan/strategic-plan.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PerformanceAssessmentInstrument } from './performance-assessment-instrument/performance-assessment-instrument.component';
import { PerformanceAssessmentPart2 } from './performance-assessment-instrument_Part2/performance-assessment-part2.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'PersonalDevelopmentPlan', component: PersonalDevelopmentPlanComponent },
  { path: 'StrategicDashboard', component: StrategicDashboardComponent },
  { path: 'StrategicPlanComponent', component: StrategicPlanComponent },
  { path: '', component: DashboardComponent, title: 'dashboard' },
  { path: 'Review', component: ReviewFormComponent, title: 'Review'},
  { path: 'TopMenu', component: TopMenuComponent, title: 'TopMenu'},
  { path: 'SideMenu', component: SideMenuComponent, title: 'SideMenu'},
  {path: 'PerformanceAssessmentInstrument', component: PerformanceAssessmentInstrument},
  {path: 'PerformanceAssessmentPart2', component: PerformanceAssessmentPart2}
];