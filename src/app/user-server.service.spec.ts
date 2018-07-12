import { TestBed, inject } from '@angular/core/testing';

import { UserServerService } from './user-server.service';

describe('UserServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserServerService]
    });
  });

  it('should be created', inject([UserServerService], (service: UserServerService) => {
    expect(service).toBeTruthy();
  }));
});
