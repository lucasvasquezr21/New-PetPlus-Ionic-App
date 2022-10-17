import { TestBed } from '@angular/core/testing';

import { PostServiceProvider } from './post-service.service';

describe('PostServiceService', () => {
  let service: PostServiceProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostServiceProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
