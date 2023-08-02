import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSV2JSONComponent } from './csv2-json.component';

describe('CSV2JSONComponent', () => {
  let component: CSV2JSONComponent;
  let fixture: ComponentFixture<CSV2JSONComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CSV2JSONComponent]
    });
    fixture = TestBed.createComponent(CSV2JSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
