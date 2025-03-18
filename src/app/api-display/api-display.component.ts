import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-display',
  imports: [CommonModule],
  templateUrl: './api-display.component.html',
  styleUrl: './api-display.component.css'
})
export class ApiDisplayComponent {

  users: any[] = [];

  constructor(private authservice: AuthService){ }

  async getUser() {
    const data = await this.authservice.getUsers();
   //console.log(data);

    this.users = data?.data || []

    console.log("testing:",this.users);
  }
}
