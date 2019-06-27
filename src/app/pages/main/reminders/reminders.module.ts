import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {RemindersPage} from './reminders.page';
import {TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: RemindersPage,
        children: [
            {
                path: 'add',
                children: [
                    {
                        path: '',
                        loadChildren: './addreminder/addreminder.module#AddreminderPageModule'
                    }
                ]
            }, {
                path: 'calendar',
                children: [
                    {
                        path: '',
                        loadChildren: './calendar/calendar.module#CalendarPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/app/reminders/calendar',
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
    declarations: [RemindersPage]
})
export class RemindersPageModule {
}
