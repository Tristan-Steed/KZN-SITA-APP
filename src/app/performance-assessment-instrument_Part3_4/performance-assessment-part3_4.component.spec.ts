import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceAssessmentPart2 } from './performance-assessment-part3_4.component';

describe('PerformanceAssessmentPart3_4', () => {
  let component: PerformanceAssessmentPart2;
  let fixture: ComponentFixture<PerformanceAssessmentPart2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceAssessmentPart2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceAssessmentPart2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
