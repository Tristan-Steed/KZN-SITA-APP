import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-performance-assessment-part3_4',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './performance-assessment-part3_4.component.html',
  styleUrls: ['./performance-assessment-part3_4.component.css']
})
export class PerformanceAssessmentPart3_4 {
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
