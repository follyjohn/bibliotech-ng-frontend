import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainsUpdateComponent } from './domains-update.component';

describe('DomainsUpdateComponent', () => {
  let component: DomainsUpdateComponent;
  let fixture: ComponentFixture<DomainsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
