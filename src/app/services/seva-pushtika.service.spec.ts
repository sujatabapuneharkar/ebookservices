import { TestBed } from '@angular/core/testing';

import { SevaPushtikaService } from './seva-pushtika.service';

describe('SevaPushtikaService', () => {
  let service: SevaPushtikaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SevaPushtikaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
