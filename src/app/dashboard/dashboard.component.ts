import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDividerModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  metrics = {
    employees: 120,
    performance: 85,
    meetings: 14
  };

  performanceData = [
    { name: 'John Doe', score: 90, status: 'Excellent' },
    { name: 'Jane Smith', score: 80, status: 'Good' },
    { name: 'Michael Brown', score: 75, status: 'Average' },
    { name: 'Lisa Adams', score: 65, status: 'Needs Improvement' }
  ];

  displayedColumns: string[] = ['name', 'score', 'status'];

  constructor() {}

  ngOnInit(): void {}

  refresh() {
    window.location.reload();
  }

  getColor(status: string) {
    switch (status) {
      case 'Excellent':
        return 'primary';
      case 'Good':
        return 'accent';
      case 'Average':
        return 'warn';
      default:
        return '';
    }
  }
}