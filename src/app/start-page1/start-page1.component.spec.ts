import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPage1Component } from './start-page1.component';

describe('StartPage1Component', () => {
  let component: StartPage1Component;
  let fixture: ComponentFixture<StartPage1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartPage1Component]
    });
    fixture = TestBed.createComponent(StartPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
