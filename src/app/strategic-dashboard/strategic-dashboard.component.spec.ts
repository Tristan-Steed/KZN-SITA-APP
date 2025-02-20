import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicDashboardComponent } from './strategic-dashboard.component';

describe('StrategicDashboardComponent', () => {
  let component: StrategicDashboardComponent;
  let fixture: ComponentFixture<StrategicDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategicDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategicDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
