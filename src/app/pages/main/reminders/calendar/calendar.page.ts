import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.page.html',
    styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

    calendarPlugins = [dayGridPlugin]; // important!

    constructor() {
    }

    ngOnInit() {
    }

}
