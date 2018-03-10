import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxtTrackerService } from './../shared/tracker/tracker.service';

import { GrapesSharedModule } from '../shared';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

import {
    adminState,
    AuditsComponent,
    UserMgmtComponent,
    UserDialogComponent,
    UserDeleteDialogComponent,
    UserMgmtDetailComponent,
    UserMgmtDialogComponent,
    UserMgmtDeleteDialogComponent,
    LogsComponent,
    NxtMetricsMonitoringModalComponent,
    NxtMetricsMonitoringComponent,
    NxtHealthModalComponent,
    NxtHealthCheckComponent,
    NxtConfigurationComponent,
    NxtDocsComponent,
    AuditsService,
    NxtConfigurationService,
    NxtHealthService,
    NxtMetricsService,
    NxtTrackerComponent,
    LogsService,
    UserResolvePagingParams,
    UserResolve,
    UserModalService
} from './';

@NgModule({
    imports: [
        GrapesSharedModule,
        RouterModule.forChild(adminState),
        /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    ],
    declarations: [
        AuditsComponent,
        UserMgmtComponent,
        UserDialogComponent,
        UserDeleteDialogComponent,
        UserMgmtDetailComponent,
        UserMgmtDialogComponent,
        UserMgmtDeleteDialogComponent,
        LogsComponent,
        NxtConfigurationComponent,
        NxtHealthCheckComponent,
        NxtHealthModalComponent,
        NxtDocsComponent,
        NxtTrackerComponent,
        NxtMetricsMonitoringComponent,
        NxtMetricsMonitoringModalComponent
    ],
    entryComponents: [
        UserMgmtDialogComponent,
        UserMgmtDeleteDialogComponent,
        NxtHealthModalComponent,
        NxtMetricsMonitoringModalComponent,
    ],
    providers: [
        AuditsService,
        NxtConfigurationService,
        NxtHealthService,
        NxtMetricsService,
        LogsService,
        NxtTrackerService,
        UserResolvePagingParams,
        UserResolve,
        UserModalService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GrapesAdminModule {}
