import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import { WindowRef } from './tracker/window.service';
import {
    GrapesSharedLibsModule,
    JhiLanguageHelper,
    FindLanguageFromKeyPipe,
    NxtAlertComponent,
    NxtAlertErrorComponent
} from './';

@NgModule({
    imports: [
        GrapesSharedLibsModule
    ],
    declarations: [
        FindLanguageFromKeyPipe,
        NxtAlertComponent,
        NxtAlertErrorComponent
    ],
    providers: [
        JhiLanguageHelper,
        WindowRef,
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        GrapesSharedLibsModule,
        FindLanguageFromKeyPipe,
        NxtAlertComponent,
        NxtAlertErrorComponent
    ]
})
export class GrapesSharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
