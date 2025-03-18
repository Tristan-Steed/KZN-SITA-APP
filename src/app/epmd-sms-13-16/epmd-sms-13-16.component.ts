import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-epmd-sms-13-16',
  templateUrl: './epmd-sms-13-16.component.html',
  styleUrl: './epmd-sms-13-16.component.css',
  imports: [CommonModule, FormsModule]
})
export class EpmdSmsLevel112Component {
  rows = [
    { objective: '', outputs: '', indicator: '', q1: '', q2: '', q3: '', q4: '', budget: '', hrResources: '' }
  ];

  addRow() {
    this.rows.push({ objective: '', outputs: '', indicator: '', q1: '', q2: '', q3: '', q4: '', budget: '', hrResources: '' });
  }

  removeRow(index: number) {
    this.rows.splice(index, 1);
  }

  saveRow(index: number) {
    console.log("Row saved:", this.rows[index]);
  }
}
