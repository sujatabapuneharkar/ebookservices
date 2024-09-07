import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpentrybookComponent } from './empentrybook.component';

describe('EmpentrybookComponent', () => {
  let component: EmpentrybookComponent;
  let fixture: ComponentFixture<EmpentrybookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpentrybookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpentrybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
