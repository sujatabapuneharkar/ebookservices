import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevapushtikaEmpnameComponent } from './sevapushtika-empname.component';

describe('SevapushtikaEmpnameComponent', () => {
  let component: SevapushtikaEmpnameComponent;
  let fixture: ComponentFixture<SevapushtikaEmpnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SevapushtikaEmpnameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevapushtikaEmpnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
