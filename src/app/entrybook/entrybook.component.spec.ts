import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrybookComponent } from './entrybook.component';

describe('EntrybookComponent', () => {
  let component: EntrybookComponent;
  let fixture: ComponentFixture<EntrybookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntrybookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
