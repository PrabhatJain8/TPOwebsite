import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompanyStudentsComponent } from './list-company-students.component';

describe('ListCompanyStudentsComponent', () => {
  let component: ListCompanyStudentsComponent;
  let fixture: ComponentFixture<ListCompanyStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCompanyStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCompanyStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
