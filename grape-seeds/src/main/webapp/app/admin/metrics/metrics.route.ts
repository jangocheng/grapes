import { Route } from '@angular/router';

import { NxtMetricsMonitoringComponent } from './metrics.component';

export const metricsRoute: Route = {
    path: 'nxt-metrics',
    component: NxtMetricsMonitoringComponent,
    data: {
        pageTitle: 'metrics.title'
    }
};
