import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent {
  @Input() icon: string = 'star'; 
  @Input() title: string = 'Header text';
  @Input() items: { icon: string; text: string }[] = [];
  @Input() buttonText: string = 'Action Button';
  @Input() buttonIcon: string = 'star';
  @Input() buttonColor: string = 'green';
  @Input() cardWidth: string = '300px'; // Default width
}