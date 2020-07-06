import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionsUpdateComponent } from './permissions-update.component';

describe('PermissionsUpdateComponent', () => {
  let component: PermissionsUpdateComponent;
  let fixture: ComponentFixture<PermissionsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
