import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceAssessmentInstrument } from './performance-assessment-instrument.component';

describe('PerformanceAssessmentIntrument', () => {
  let component: PerformanceAssessmentInstrument;
  let fixture: ComponentFixture<PerformanceAssessmentInstrument>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceAssessmentInstrument]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceAssessmentInstrument);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
