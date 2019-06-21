import {TestBed} from '@angular/core/testing';

import {WhodataService} from './whodata.service';

describe('WhodataService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: WhodataService = TestBed.get(WhodataService);
        expect(service).toBeTruthy();
    });
});
