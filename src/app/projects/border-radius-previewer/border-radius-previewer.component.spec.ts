import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderRadiusPreviewerComponent } from './border-radius-previewer.component';

describe('BorderRadiusPreviewerComponent', () => {
  let component: BorderRadiusPreviewerComponent;
  let fixture: ComponentFixture<BorderRadiusPreviewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorderRadiusPreviewerComponent]
    });
    fixture = TestBed.createComponent(BorderRadiusPreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
