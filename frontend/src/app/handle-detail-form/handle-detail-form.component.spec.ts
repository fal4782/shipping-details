import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleDetailFormComponent } from './handle-detail-form.component';

describe('AddDetailFormComponent', () => {
  let component: HandleDetailFormComponent;
  let fixture: ComponentFixture<HandleDetailFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandleDetailFormComponent]
    });
    fixture = TestBed.createComponent(HandleDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
