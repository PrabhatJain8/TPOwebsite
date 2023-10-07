import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastListComponent } from './past-list.component';

describe('PastListComponent', () => {
  let component: PastListComponent;
  let fixture: ComponentFixture<PastListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
