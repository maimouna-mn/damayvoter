import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEndComponent } from './page-end.component';

describe('PageEndComponent', () => {
  let component: PageEndComponent;
  let fixture: ComponentFixture<PageEndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageEndComponent]
    });
    fixture = TestBed.createComponent(PageEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
