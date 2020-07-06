import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainsDetailComponent } from './domains-detail.component';

describe('DomainsDetailComponent', () => {
  let component: DomainsDetailComponent;
  let fixture: ComponentFixture<DomainsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
