import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsUpdateComponent } from './tags-update.component';

describe('TagsUpdateComponent', () => {
  let component: TagsUpdateComponent;
  let fixture: ComponentFixture<TagsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
