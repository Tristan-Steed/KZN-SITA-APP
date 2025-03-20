import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-performance-assessment-part2',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './performance-assessment-part2.component.html',
  styleUrls: ['./performance-assessment-part2.component.css']
})
export class PerformanceAssessmentPart2 {
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
