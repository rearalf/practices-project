import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bin2DecAppComponent } from './bin2-dec-app.component';

describe('Bin2DecAppComponent', () => {
  let component: Bin2DecAppComponent;
  let fixture: ComponentFixture<Bin2DecAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bin2DecAppComponent]
    });
    fixture = TestBed.createComponent(Bin2DecAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
