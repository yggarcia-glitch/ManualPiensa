import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrototipoIntermedioPage } from './prototipo-intermedio.page';

describe('PrototipoIntermedioPage', () => {
  let component: PrototipoIntermedioPage;
  let fixture: ComponentFixture<PrototipoIntermedioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototipoIntermedioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
