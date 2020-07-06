import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainsListComponent } from './domains-list.component';

describe('DomainsListComponent', () => {
  let component: DomainsListComponent;
  let fixture: ComponentFixture<DomainsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
