import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoriaComputacionPage } from './historia-computacion.page';

describe('HistoriaComputacionPage', () => {
  let component: HistoriaComputacionPage;
  let fixture: ComponentFixture<HistoriaComputacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaComputacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
