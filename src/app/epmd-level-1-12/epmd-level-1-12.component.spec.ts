import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmdLevel112Component } from './epmd-level-1-12.component';

describe('EpmdLevel112Component', () => {
  let component: EpmdLevel112Component;
  let fixture: ComponentFixture<EpmdLevel112Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpmdLevel112Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpmdLevel112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
