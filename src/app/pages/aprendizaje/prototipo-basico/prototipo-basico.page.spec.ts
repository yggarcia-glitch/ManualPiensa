import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrototipoBasicoPage } from './prototipo-basico.page';

describe('PrototipoBasicoPage', () => {
  let component: PrototipoBasicoPage;
  let fixture: ComponentFixture<PrototipoBasicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototipoBasicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
