import { TestBed } from '@angular/core/testing';

import { DataChangeObjectService } from './data-change-object.service';

describe('DataChangeObjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataChangeObjectService = TestBed.get(DataChangeObjectService);
    expect(service).toBeTruthy();
  });
});
