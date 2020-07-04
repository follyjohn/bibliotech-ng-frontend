import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsCreateComponent } from './tags-create.component';

describe('TagsCreateComponent', () => {
  let component: TagsCreateComponent;
  let fixture: ComponentFixture<TagsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
