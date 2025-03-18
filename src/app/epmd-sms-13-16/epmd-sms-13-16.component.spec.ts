import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmdSms1316Component } from './epmd-sms-13-16.component';

describe('EpmdSms1316Component', () => {
  let component: EpmdSms1316Component;
  let fixture: ComponentFixture<EpmdSms1316Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpmdSms1316Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpmdSms1316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
