import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalDevelopmentPlanComponent } from './personal-development-plan/personal-development-plan.component';
import { StrategicPlanComponent } from './strategic-plan/strategic-plan.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PerformanceAssessmentInstrument } from './performance-assessment-instrument/performance-assessment-instrument.component';
import { PerformanceAssessmentPart2 } from './performance-assessment-instrument_Part2/performance-assessment-part2.component';
import { PerformanceAssessmentPart3_4 } from './performance-assessment-instrument_Part3_4/performance-assessment-part3_4.component';

export const routes: Routes = [
  { path: 'DashboardComponent', component: DashboardComponent, title: 'dashboard',  },   //canActivate: [AuthGuard]
  { path: 'Review', component: ReviewFormComponent, title: 'Review'},
  { path: 'TopMenu', component: TopMenuComponent, title: 'TopMenu'},
  { path: 'SideMenu', component: SideMenuComponent, title: 'SideMenu'},
  { path: 'PersonalDevelopmentPlan', component: PersonalDevelopmentPlanComponent},
  { path: 'StrategicPlan', component: StrategicPlanComponent},
  { path: 'PerformanceAssessmentInstrument', component: PerformanceAssessmentInstrument},
  { path: 'PerformanceAssessmentInstrumentPart2', component: PerformanceAssessmentPart2},
  { path: 'PerformanceAssessmentInstrumentPart3_4', component: PerformanceAssessmentPart3_4}
];