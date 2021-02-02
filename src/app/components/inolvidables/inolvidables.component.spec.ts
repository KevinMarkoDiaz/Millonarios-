import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InolvidablesComponent } from './inolvidables.component';

describe('InolvidablesComponent', () => {
  let component: InolvidablesComponent;
  let fixture: ComponentFixture<InolvidablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InolvidablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InolvidablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
