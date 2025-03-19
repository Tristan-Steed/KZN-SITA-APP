import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {MatDialog}  from '@angular/material/dialog'
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

interface RowData {
  id: number;
  objective: string;
  outputs: string;
  indicators: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  budget: string;
  hr: string;
}

@Component({
  selector: 'app-epmd-sms-13-16',
  templateUrl: './epmd-sms-13-16.component.html',
  styleUrl: './epmd-sms-13-16.component.css',
  imports: [CommonModule, FormsModule, ]
})


export class EpmdSmsLevel1316Component implements OnInit{

  constructor (private http: HttpClient, private dialog: MatDialog) {}

  
  rows: RowData[]= []

  apiURL = 'http://localhost:3000/';
  
  async ngOnInit(){
    try{
      const response = await fetch(this.apiURL + 'First_DPMs');
      const data: RowData[] = await response.json();
      
      console.log(data);

      this.rows = data;
    }catch (error){
      console.log("Error fetching data: ", error)
    }
  }
  

  addRow() {
    this.rows.push({id: 0, objective: '', outputs: '', indicators: '', q1: '', q2: '', q3: '', q4: '', budget: '', hr: '' });
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
  saveRow(index: number) {
    const rowData = { ...this.rows[index] }; // Copy the data to avoid modifying the original object

    // Ensure all required fields exist and set defaults for optional fields
    const postData = {
        objective: rowData.objective || '',
        outputs: rowData.outputs || '',
        indicators: rowData.indicators || '',
        q1: rowData.q1 ?? null,
        q2: rowData.q2 ?? null,
        q3: rowData.q3 ?? null,
        q4: rowData.q4 ?? null,
        budget: rowData.budget || '',
        hr: rowData.hr || ''
    };

    this.http.post('http://localhost:3000/First_DPMs', postData).subscribe({
        next: (response) => {
            console.log('Row saved:', response);
            alert('Row successfully saved!');
        },
        error: (error) => {
            console.error('Error saving row:', error);
            alert('Failed to save row. Please try again.');
        },
        complete: () => console.log('Request completed!')
    });
  }
  updateRow(index: number) {
  const rowData = { ...this.rows[index] }; 

  if (!rowData.id) {
      alert("Cannot update row without an ID.");
      return;
  }

  const updateData = {
      objective: rowData.objective || '',
      outputs: rowData.outputs || '',
      indicators: rowData.indicators || '',
      q1: rowData.q1 ?? null,
      q2: rowData.q2 ?? null,
      q3: rowData.q3 ?? null,
      q4: rowData.q4 ?? null,
      budget: rowData.budget || '',
      hr: rowData.hr || ''
  };

  this.http.put(`http://localhost:3000/First_DPMs/${rowData.id}`, updateData).subscribe({
      next: (response) => {
          console.log('Row updated:', response);
          alert('Row updated successfully!');
      },
      error: (error) => {
          console.error('Error updating row:', error);
          alert('Failed to update row. Please try again.');
      },
      complete: () => console.log('Update request completed!')
  });
  }


  removeRow(index: number) {
    const rowData = this.rows[index];
  
    if (!rowData.id) {
      alert("Cannot delete row without an ID.");
      return;
    }
  
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { message: "Are you sure you want to delete this record?" }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // If user confirmed deletion
        this.http.delete(`http://localhost:3000/First_DPMs/${rowData.id}`).subscribe({
          next: (response) => {
            console.log('Row deleted:', response);
            alert('Row deleted successfully!');
            this.rows.splice(index, 1); // Remove row from UI after successful deletion
          },
          error: (error) => {
            console.error('Error deleting row:', error);
            alert('Failed to delete row. Please try again.');
          },
          complete: () => console.log('Delete request completed!')
        });
      }
    });
  }
  
}
