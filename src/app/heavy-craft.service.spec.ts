/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeavyCraftService } from './heavy-craft.service';

describe('Service: HeavyCraft', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeavyCraftService]
    });
  });

  it('should ...', inject([HeavyCraftService], (service: HeavyCraftService) => {
    expect(service).toBeTruthy();
  }));
});
