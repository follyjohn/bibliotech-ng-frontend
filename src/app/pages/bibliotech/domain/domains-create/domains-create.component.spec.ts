import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainsCreateComponent } from './domains-create.component';

describe('DomainsCreateComponent', () => {
  let component: DomainsCreateComponent;
  let fixture: ComponentFixture<DomainsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
