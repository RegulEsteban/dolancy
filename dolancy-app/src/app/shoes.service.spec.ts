import { TestBed, inject } from '@angular/core/testing';

import { ShoesService } from './shoes.service';

describe('ShoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoesService]
    });
  });

  it('should be created', inject([ShoesService], (service: ShoesService) => {
    expect(service).toBeTruthy();
  }));
});
