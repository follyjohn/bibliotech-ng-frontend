import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionUpdateComponent } from './permission-update.component';

describe('PermissionUpdateComponent', () => {
  let component: PermissionUpdateComponent;
  let fixture: ComponentFixture<PermissionUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
