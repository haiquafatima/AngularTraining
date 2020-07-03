import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2Ass2Component } from './task2-ass2.component';

describe('Task2Ass2Component', () => {
  let component: Task2Ass2Component;
  let fixture: ComponentFixture<Task2Ass2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task2Ass2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task2Ass2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
