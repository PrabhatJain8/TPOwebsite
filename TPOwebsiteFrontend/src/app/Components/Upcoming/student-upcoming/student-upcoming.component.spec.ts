import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUpcomingComponent } from './student-upcoming.component';

describe('StudentUpcomingComponent', () => {
  let component: StudentUpcomingComponent;
  let fixture: ComponentFixture<StudentUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentUpcomingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
