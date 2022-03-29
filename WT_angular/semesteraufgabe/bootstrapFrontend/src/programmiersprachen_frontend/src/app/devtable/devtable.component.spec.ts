import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevtableComponent } from './devtable.component';

describe('DevtableComponent', () => {
  let component: DevtableComponent;
  let fixture: ComponentFixture<DevtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
