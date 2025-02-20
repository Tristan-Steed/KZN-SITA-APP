import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalDevelopmentPlanComponent } from './personal-development-plan/personal-development-plan.component';
import { StrategicDashboardComponent } from './strategic-dashboard/strategic-dashboard.component';
import { StrategicPlanComponent } from './strategic-plan/strategic-plan.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'PersonalDevelopmentPlan', component: PersonalDevelopmentPlanComponent },
  { path: 'StrategicDashboard', component: StrategicDashboardComponent },
  { path: 'StrategicPlanComponent', component: StrategicPlanComponent }
];