import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSevapushtikaComponent } from './upload-sevapushtika.component';

describe('UploadSevapushtikaComponent', () => {
  let component: UploadSevapushtikaComponent;
  let fixture: ComponentFixture<UploadSevapushtikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadSevapushtikaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadSevapushtikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
