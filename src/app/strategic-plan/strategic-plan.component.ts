import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-strategic-plan',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './strategic-plan.component.html',
  styleUrls: ['./strategic-plan.component.css']
})
export class StrategicPlanComponent {
  mandate = {
    constitutional: '',
    legislative: '',
    policies: '',
    courtRulings: ''
  };

  strategicFocus = {
    vision: '',
    mission: '',
    values: ''
  };

  performance = [
    { outcome: '', indicator: '', baseline: '', target: '' }
  ];

  addOutcome() {
    this.performance.push({ outcome: '', indicator: '', baseline: '', target: '' });
  }

  removeOutcome(index: number) {
    this.performance.splice(index, 1);
  }
}
