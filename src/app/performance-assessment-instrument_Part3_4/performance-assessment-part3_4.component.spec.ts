import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceAssessmentPart3_4 } from './performance-assessment-part3_4.component';

describe('PerformanceAssessmentPart3_4', () => {
  let component: PerformanceAssessmentPart3_4;
  let fixture: ComponentFixture<PerformanceAssessmentPart3_4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceAssessmentPart3_4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceAssessmentPart3_4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
