import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualPerformancePlanComponent } from './annual-performance-plan.component';

describe('AnnualPerformancePlanComponent', () => {
  let component: AnnualPerformancePlanComponent;
  let fixture: ComponentFixture<AnnualPerformancePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnualPerformancePlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnualPerformancePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
