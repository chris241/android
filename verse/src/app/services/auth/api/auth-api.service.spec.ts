import { TestBed } from '@angular/core/testing';
import { AuthApiService } from './auth-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: AuthApiService = TestBed.get(AuthApiService);
    expect(service).toBeTruthy();
  });
});
