import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasFormAddComponent } from './facturas-form-add.component';

describe('FacturasFormAddComponent', () => {
  let component: FacturasFormAddComponent;
  let fixture: ComponentFixture<FacturasFormAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturasFormAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturasFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
