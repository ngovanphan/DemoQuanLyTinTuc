import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTintucComponent } from './edit-tintuc.component';

describe('EditTintucComponent', () => {
  let component: EditTintucComponent;
  let fixture: ComponentFixture<EditTintucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTintucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTintucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
