import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmdSmsLevel1316Component } from './epmd-sms-13-16.component';

describe('EpmdSmsLevel1316Component', () => {
  let component: EpmdSmsLevel1316Component;
  let fixture: ComponentFixture<EpmdSmsLevel1316Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpmdSmsLevel1316Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpmdSmsLevel1316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
