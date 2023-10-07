import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledListAComponent } from './enrolled-list-a.component';

describe('EnrolledListAComponent', () => {
  let component: EnrolledListAComponent;
  let fixture: ComponentFixture<EnrolledListAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrolledListAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrolledListAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
