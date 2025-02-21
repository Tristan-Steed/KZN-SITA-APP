import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-personal-development-plan',
  templateUrl: './personal-development-plan.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./personal-development-plan.component.css']
})
export class PersonalDevelopmentPlanComponent {
  employee = {
    department: '',
    jobTitle: '',
    name: ''
  };

  developmentGoals: any[] = [];
  conferences: any[] = [];

  impactAssessment: string = '';
  employeeComments: string = '';
  supervisorComments: string = '';

  constructor() {
    this.loadFromLocalStorage();
  }

  // Add a new development goal
  addDevelopmentGoal() {
    this.developmentGoals.push({ area: '', training: '', objective: '', quarter: '', });
  }

  // Remove a development goal
  SaveGoal(index: number) {
    this.developmentGoals.splice(index, 1);
  }

  removeGoal(index: number) {
    this.developmentGoals.splice(index, 1);
  }

  // Add a new conference
  addConference() {
    this.conferences.push({ name: '', type: '', });
  }

  // Remove a conference
  SaveConference(index: number) {
    this.conferences.splice(index, 1);
  }
  removeConference(index: number) {
    this.conferences.splice(index, 1);
  }

  // Save data to local storage
  savePlan() {
    alert('Plan saved locally!');
  }

  // Load saved data from local storage
  loadFromLocalStorage() {
    
  }

  // Submit plan for approval (mocked action)
  submitForApproval() {
    alert('Plan submitted for approval!');
  }
}
