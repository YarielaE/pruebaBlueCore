import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariosDetallePage } from './usuarios-detalle.page';

describe('UsuariosDetallePage', () => {
  let component: UsuariosDetallePage;
  let fixture: ComponentFixture<UsuariosDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
