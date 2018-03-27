import { Route } from '@angular/router';

import { NxtDocsComponent } from './docs.component';

export const docsRoute: Route = {
    path: 'docs',
    component: NxtDocsComponent,
    data: {
        pageTitle: 'global.menu.admin.apidocs'
    }
};
