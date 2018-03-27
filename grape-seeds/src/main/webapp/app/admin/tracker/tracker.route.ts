import { Route } from '@angular/router';

import { NxtTrackerComponent } from './tracker.component';

export const trackerRoute: Route = {
    path: 'nxt-tracker',
    component: NxtTrackerComponent,
    data: {
        pageTitle: 'tracker.title'
    }
};
