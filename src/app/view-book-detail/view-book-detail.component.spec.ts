import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookDetailComponent } from './view-book-detail.component';

describe('ViewBookDetailComponent', () => {
  let component: ViewBookDetailComponent;
  let fixture: ComponentFixture<ViewBookDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
