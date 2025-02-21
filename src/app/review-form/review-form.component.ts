import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TopMenuComponent } from "../top-menu/top-menu.component";
import { SideMenuComponent } from "../side-menu/side-menu.component";



@Component({
  selector: 'app-review-form',
  imports: [TopMenuComponent, SideMenuComponent],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css'
})


export class ReviewFormComponent {

  reviewForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.reviewForm= this.fb.group({
      name: ['', Validators.required],
      supervisor: ['', Validators.required],
      jobTitle: ['', Validators.required],
      component:['', Validators.required],
      dateofReview: ['', Validators.required],
      salaryLevel: ['', Validators.required],
      kras: this.fb.array([this.createKRA()]),
      gafs: this.fb.array([this.createGAF()])
    });
  }

  get kras(): FormArray {
    return this.reviewForm.get('kras') as FormArray;
  }

  get gafs(): FormArray{
    return this.reviewForm.get('gafs') as FormArray;
  }

  createKRA(): FormGroup {
    return this.fb.group({
      kra: ['',Validators.required],
      weighting: ['', Validators.required],
      ownAssessment: ['', Validators.required],
      supervisorAssessment: ['', Validators.required]
    });
  
  }

  createGAF(): FormGroup {
    return this.fb.group({
      gaf: ['', Validators.required],
      weighting: ['', Validators.required],
      ownRating: ['', Validators.required],
      supervisorRating: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.reviewForm) {
      console.log('Form Submitted', this.reviewForm.value);
      alert('Review form submitted successfully');
    }
    else {
      alert('please fill in all required fields');
    }
  }



}
