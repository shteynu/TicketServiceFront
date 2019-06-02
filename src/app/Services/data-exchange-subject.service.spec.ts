import { TestBed } from '@angular/core/testing';

import { DataExchangeSubjectService } from './data-exchange-subject.service';

describe('DataExchangeSubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataExchangeSubjectService = TestBed.get(DataExchangeSubjectService);
    expect(service).toBeTruthy();
  });
});
