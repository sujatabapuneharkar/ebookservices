import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpsevapushtikaComponent } from './empsevapushtika.component';

describe('EmpsevapushtikaComponent', () => {
  let component: EmpsevapushtikaComponent;
  let fixture: ComponentFixture<EmpsevapushtikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpsevapushtikaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpsevapushtikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
