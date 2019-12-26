import { TestBed } from '@angular/core/testing';

import { EventsListRouteGuardService } from './events-list-route-guard.service';

describe('EventsListRouteGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventsListRouteGuardService = TestBed.get(EventsListRouteGuardService);
    expect(service).toBeTruthy();
  });
});
