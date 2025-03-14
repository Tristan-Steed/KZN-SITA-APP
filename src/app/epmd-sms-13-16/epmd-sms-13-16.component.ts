import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface RowData {
  objective: string;
  outputs: string;
  indicators: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  budget: string;
  hrResources: string;
}

@Component({
  selector: 'app-epmd-sms-13-16',
  templateUrl: './epmd-sms-13-16.component.html',
  styleUrl: './epmd-sms-13-16.component.css',
  imports: [CommonModule, FormsModule, ]
})


export class EpmdSmsLevel112Component implements OnInit{

  constructor (private http: HttpClient) {}

  
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
    this.rows.push({ objective: '', outputs: '', indicators: '', q1: '', q2: '', q3: '', q4: '', budget: '', hrResources: '' });
  }

  removeRow(index: number) {
    this.rows.splice(index, 1);
  }

  saveRow(index: number) {
    const rowData = this.rows[index]; // Replace with actual data object
  
    this.http.post('http://localhost:3000/First_DPMs', rowData).subscribe({
      next: (response) => console.log('Row saved:', response),
      error: (error) => console.error('Error saving row:', error),
      complete: () => console.log('Request completed!')
    });
}
}
