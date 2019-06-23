import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-reminders',
    templateUrl: './reminders.page.html',
    styleUrls: ['./reminders.page.scss'],
})
export class RemindersPage implements OnInit {

    addSelected: boolean;

    constructor() {
        this.addSelected = true; // TODO check l'url
    }


    ngOnInit() {
    }

}
