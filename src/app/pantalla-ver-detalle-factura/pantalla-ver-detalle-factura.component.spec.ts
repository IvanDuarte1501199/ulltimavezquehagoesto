import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaVerDetalleFacturaComponent } from './pantalla-ver-detalle-factura.component';

describe('PantallaVerDetalleFacturaComponent', () => {
  let component: PantallaVerDetalleFacturaComponent;
  let fixture: ComponentFixture<PantallaVerDetalleFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaVerDetalleFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaVerDetalleFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
