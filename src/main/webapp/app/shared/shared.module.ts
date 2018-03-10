import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import {
    GrapesSharedLibsModule,
    GrapesSharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    LoginModalService,
    NxtLoginModalComponent,
    Principal,
    NxtTrackerService,
    HasAnyAuthorityDirective,
} from './';

@NgModule({
    imports: [
        GrapesSharedLibsModule,
        GrapesSharedCommonModule
    ],
    declarations: [
        NxtLoginModalComponent,
        HasAnyAuthorityDirective
    ],
    providers: [
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        NxtTrackerService,
        AuthServerProvider,
        UserService,
        DatePipe
    ],
    entryComponents: [NxtLoginModalComponent],
    exports: [
        GrapesSharedCommonModule,
        NxtLoginModalComponent,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class GrapesSharedModule {}
