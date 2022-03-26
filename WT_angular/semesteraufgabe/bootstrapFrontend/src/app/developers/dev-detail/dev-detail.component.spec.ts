import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevdetailComponent } from './dev-detail.component';

describe('DevdetailComponent', () => {
  let component: DevdetailComponent;
  let fixture: ComponentFixture<DevdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
