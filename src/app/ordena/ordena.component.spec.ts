import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenaComponent } from './ordena.component';

describe('OrdenaComponent', () => {
  let component: OrdenaComponent;
  let fixture: ComponentFixture<OrdenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
