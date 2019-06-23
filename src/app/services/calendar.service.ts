import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

export interface Event {
    title: string;
    start: string;
    end: string;
}


@Injectable({
    providedIn: 'root'
})
export class CalendarService {
    constructor(private storage: Storage) {
    }

    private _events: Event[] = [];

    get events(): Event[] {
        return this._events;
    }

    set events(value: Event[]) {
        this._events = value;
    }

    initService() {
        this.storage.get('events').then((val) => {
            if (val != null) {
                this._events = val;
            }
        });
    }

    addEvent(title, start, end) {
        this.events.push({title, start, end});
        this.saveEvents();
    }

    removeEvent(index) {
        console.log('Index = ' + index + 'Events : ' + this.events);
        this._events.splice(index, 1);
        console.log('Events : ' + this.events);

        this.saveEvents();
    }

    saveEvents() {
        this.storage.set('events', this.events);
    }
}
