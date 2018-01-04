import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTintucComponent } from './list-tintuc.component';

describe('ListTintucComponent', () => {
  let component: ListTintucComponent;
  let fixture: ComponentFixture<ListTintucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTintucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTintucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
