import { TestBed } from '@angular/core/testing';

import { CreateEventRouteGuardService } from './create-event-route-guard.service';

describe('CreateEventRouteGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateEventRouteGuardService = TestBed.get(CreateEventRouteGuardService);
    expect(service).toBeTruthy();
  });
});
