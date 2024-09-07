import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClerkshowsevapushtikaComponent } from './clerkshowsevapushtika.component';

describe('ClerkshowsevapushtikaComponent', () => {
  let component: ClerkshowsevapushtikaComponent;
  let fixture: ComponentFixture<ClerkshowsevapushtikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClerkshowsevapushtikaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClerkshowsevapushtikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
