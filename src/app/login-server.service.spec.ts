import { TestBed, inject } from '@angular/core/testing';

import { LoginServerService } from './login-server.service';

describe('LoginServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginServerService]
    });
  });

  it('should be created', inject([LoginServerService], (service: LoginServerService) => {
    expect(service).toBeTruthy();
  }));
});
