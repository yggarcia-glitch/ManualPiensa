import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RazonSocialPage } from './razon-social.page';

describe('RazonSocialPage', () => {
  let component: RazonSocialPage;
  let fixture: ComponentFixture<RazonSocialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RazonSocialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
