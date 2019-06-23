import {Component, OnInit, ViewChild} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import {CalendarService} from '../../../../services/calendar.service';
import {FullCalendarComponent} from '@fullcalendar/angular';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.page.html',
    styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
    @ViewChild('calendar') calendarComponent: FullCalendarComponent;

    calendarPlugins = [dayGridPlugin, timeGridPlugin];
    calendarEvents = this.calender.events;

    constructor(public calender: CalendarService) {

    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        const calendarApi = this.calendarComponent.getApi();
        const header = {
            left: 'dayGridMonth,timeGridWeek',
            center: 'title',
            right: 'prev,next'
        };

        calendarApi.setOption('nowIndicator', true);
        calendarApi.setOption('header', header);


        calendarApi.setOption('eventClick', info => {
            alert('Event: ' + info.event.title);
        });
    }


}
