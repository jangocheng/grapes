import { SpyObject } from './spyobject';
import { NxtTrackerService } from '../../../../main/webapp/app/shared/tracker/tracker.service';

export class MockTrackerService extends SpyObject {

    constructor() {
        super(NxtTrackerService);
    }

    connect() {}
}
