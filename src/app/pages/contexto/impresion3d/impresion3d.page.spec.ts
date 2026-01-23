import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Impresion3dPage } from './impresion3d.page';

describe('Impresion3dPage', () => {
  let component: Impresion3dPage;
  let fixture: ComponentFixture<Impresion3dPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Impresion3dPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
