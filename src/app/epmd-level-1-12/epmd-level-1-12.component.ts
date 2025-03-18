import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-epmd-level-1-12',
  templateUrl: './epmd-level-1-12.component.html',
  styleUrls: ['./epmd-level-1-12.component.css'],
  imports: [CommonModule, FormsModule]
})
export class EpmdLevel112Component {
  rows: any[] = [];

  // Add a new row to the table
  addRow() {
    this.rows.push({
      keyActivity: '',
      indicators: '',
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      humanResources: '',
      financialResources: ''
    });
  }

  // Save the data of a specific row
  saveRow(index: number) {
    console.log('Saved Row:', this.rows[index]);
  }

  // Remove a row from the table
  removeRow(index: number) {
    this.rows.splice(index, 1);
  }
}
