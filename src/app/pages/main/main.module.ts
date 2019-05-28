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
                loadChildren: './pages/main/tracking/tracking.module#TrackingPageModule'
            }
            , {
                path: 'reminders',
                loadChildren: './pages/main/reminders/reminders.module#RemindersPageModule'
            }
            , {
                path: 'misc',
                loadChildren: './pages/main/misc/misc.module#MiscPageModule'
            }
            , {
                path: '',
                redirectTo: 'dashboard',
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
