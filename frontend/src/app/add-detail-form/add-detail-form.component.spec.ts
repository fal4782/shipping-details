import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailFormComponent } from './add-detail-form.component';

describe('AddDetailFormComponent', () => {
  let component: AddDetailFormComponent;
  let fixture: ComponentFixture<AddDetailFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDetailFormComponent]
    });
    fixture = TestBed.createComponent(AddDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
