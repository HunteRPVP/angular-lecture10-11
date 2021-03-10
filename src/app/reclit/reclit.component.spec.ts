import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclitComponent } from './reclit.component';

describe('ReclitComponent', () => {
  let component: ReclitComponent;
  let fixture: ComponentFixture<ReclitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
