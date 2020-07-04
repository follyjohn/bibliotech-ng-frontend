import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagUpdateComponent } from './tag-update.component';

describe('TagUpdateComponent', () => {
  let component: TagUpdateComponent;
  let fixture: ComponentFixture<TagUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
