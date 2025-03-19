import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {MatDialog}  from '@angular/material/dialog'
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';

interface rowData {
  id: number;
  key_activity: string;
  indicators: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  hr: string;
  fr: string;
}

@Component({
  selector: 'app-epmd-level-1-12',
  templateUrl: './epmd-level-1-12.component.html',
  styleUrls: ['./epmd-level-1-12.component.css'],
  imports: [CommonModule, FormsModule, TopMenuComponent, SideMenuComponent]
})


export class EpmdLevel112Component implements OnInit {

  constructor( private http: HttpClient, private dialog: MatDialog){}

  rows: rowData[] = [];

  apiUrl = 'http://localhost:3000/';

  async ngOnInit() {
    try{
      const response = await fetch(this.apiUrl+'First_EMPs');
      const data: rowData[] = await response.json();

      console.log(data);
      this.rows = data;

    }catch(error){
      console.log("Error fetching data: ",error);
    }
  }

  addRow() {
    this.rows.push({ id: 0, key_activity: '', indicators: '', q1: '', q2: '', q3: '', q4: '', hr: '', fr: '' });
  }


  handleRow(index: number) {
        const rowData = this.rows[index];
    
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            
            data: { message: 'Are you sure you want to proceed?' }
        });
    
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                if (rowData.id) {
                    this.updateRow(index);
                } else {
                    this.saveRow(index);
                }
            }
        });
    }

  // Save the data of a specific row
  saveRow(index: number) {
    const rowData = {...this.rows[index]}

    const postData = {
      key_activity: rowData.key_activity || '',
      indicators: rowData.indicators || '',
      q1: rowData.q1 || null,
      q2: rowData.q2 || null,
      q3: rowData.q3 || null,
      q4: rowData.q4 || null,
      hr: rowData.hr || '',
      fr: rowData.fr || ''
    }

    this.http.post(this.apiUrl+'First_EMPs', postData).subscribe({
      next: (response) => {
        console.log('Row saved:', response);
        alert('Row successfully saved!');
    },
    error: (error) => {
        console.error('Error saving row:', error);
        alert('Failed to save row. Please try again.');
    },
    complete:() => console.log('Request completed!')
    });
  }

  updateRow(index: number){

  }


  // Remove a row from the table
  remove(index: number) {
    this.rows.splice(index, 1);
  }
}
