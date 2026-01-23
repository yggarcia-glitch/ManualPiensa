import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrototipoRealistaPage } from './prototipo-realista.page';

describe('PrototipoRealistaPage', () => {
  let component: PrototipoRealistaPage;
  let fixture: ComponentFixture<PrototipoRealistaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototipoRealistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
