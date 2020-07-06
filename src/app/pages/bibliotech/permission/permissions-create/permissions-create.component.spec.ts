import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionsCreateComponent } from './permissions-create.component';

describe('PermissionsCreateComponent', () => {
  let component: PermissionsCreateComponent;
  let fixture: ComponentFixture<PermissionsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
