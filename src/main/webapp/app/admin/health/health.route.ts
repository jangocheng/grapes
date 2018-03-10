import { Route } from '@angular/router';

import { NxtHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
    path: 'nxt-health',
    component: NxtHealthCheckComponent,
    data: {
        pageTitle: 'health.title'
    }
};
