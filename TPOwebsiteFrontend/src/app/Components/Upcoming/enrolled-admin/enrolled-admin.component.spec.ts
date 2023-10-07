import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledAdminComponent } from './enrolled-admin.component';

describe('EnrolledAdminComponent', () => {
  let component: EnrolledAdminComponent;
  let fixture: ComponentFixture<EnrolledAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrolledAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrolledAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
