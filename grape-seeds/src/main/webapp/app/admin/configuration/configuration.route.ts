import { Route } from '@angular/router';

import { NxtConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
    path: 'nxt-configuration',
    component: NxtConfigurationComponent,
    data: {
        pageTitle: 'configuration.title'
    }
};
