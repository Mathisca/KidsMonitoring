import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {CalendarPage} from './calendar.page';
import {FullCalendarModule} from '@fullcalendar/angular';

const routes: Routes = [
    {
        path: '',
        component: CalendarPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        FullCalendarModule
    ],
    declarations: [CalendarPage]
})
export class CalendarPageModule {
}
