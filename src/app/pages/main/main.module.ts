import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {MainPage} from './main.page';

const routes: Routes = [
    {
        path: '',
        component: MainPage,
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardPageModule'
            }, {
                path: 'settings',
                loadChildren: './settings/settings.module#SettingsPageModule'
            }, {
                path: 'tracking',
                children: [
                    {
                        path: '',
                        loadChildren: './tracking/tracking.module#TrackingPageModule'
                    }
                ]
            }
            , {
                path: 'reminders',
                children: [
                    {
                        path: '',
                        loadChildren: './reminders/reminders.module#RemindersPageModule'
                    }
                ]
            }
            , {
                path: 'misc',
                loadChildren: './misc/misc.module#MiscPageModule'
            }, {
                path: 'guides',
                loadChildren: './guides/guides.module#GuidesPageModule'
            }
            , {
                path: '',
                redirectTo: '/app/dashboard',
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
        RouterModule.forChild(routes),
    ],
    declarations: [MainPage]
})
export class MainPageModule {
}
