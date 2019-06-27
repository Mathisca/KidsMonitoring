import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {MainPage} from './main.page';
import {TranslateModule} from '@ngx-translate/core';

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
                path: 'milestones',
                loadChildren: './milestones/milestones.module#MilestonesPageModule'
            }, {
                path: 'guides',
                loadChildren: './guides/guides.module#GuidesPageModule'
            }, {
                path: 'diary',
                loadChildren: './diary/diary.module#DiaryPageModule'
            }, {
                path: 'food',
                loadChildren: './foodcalculator/foodcalculator.module#FoodcalculatorPageModule'
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
        TranslateModule.forChild()
    ],
    declarations: [MainPage]
})
export class MainPageModule {
}
