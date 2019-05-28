import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {TrackingPage} from './tracking.page';

const routes: Routes = [
    {
        path: '',
        component: TrackingPage,
        children: [
            {
                path: 'add',
                children: [
                    {
                        path: '',
                        loadChildren: './add/add.module#AddPageModule'
                    }
                ]
            }, {
                path: 'analytics',
                children: [
                    {
                        path: '',
                        loadChildren: './analytics/analytics.module#AnalyticsPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/app/tracking/add',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [TrackingPage]
})
export class TrackingPageModule {
}
