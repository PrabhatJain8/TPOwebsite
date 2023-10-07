import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingAddComponent } from './upcoming-add.component';

describe('UpcomingAddComponent', () => {
  let component: UpcomingAddComponent;
  let fixture: ComponentFixture<UpcomingAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
