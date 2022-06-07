import { TestBed } from '@angular/core/testing';

import { PartTypesService } from './part-types.service';

describe('PartTypesService', () => {
  let service: PartTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
