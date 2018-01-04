import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTintucComponent } from './detail-tintuc.component';

describe('DetailTintucComponent', () => {
  let component: DetailTintucComponent;
  let fixture: ComponentFixture<DetailTintucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTintucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTintucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
