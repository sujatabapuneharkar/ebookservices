import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteabtractComponent } from './noteabtract.component';

describe('NoteabtractComponent', () => {
  let component: NoteabtractComponent;
  let fixture: ComponentFixture<NoteabtractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteabtractComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteabtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
