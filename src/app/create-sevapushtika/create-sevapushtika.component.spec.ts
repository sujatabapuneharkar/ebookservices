import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSevapushtikaComponent } from './create-sevapushtika.component';

describe('CreateSevapushtikaComponent', () => {
  let component: CreateSevapushtikaComponent;
  let fixture: ComponentFixture<CreateSevapushtikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSevapushtikaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSevapushtikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
