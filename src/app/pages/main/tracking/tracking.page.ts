import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-tracking',
    templateUrl: './tracking.page.html',
    styleUrls: ['./tracking.page.scss'],
})
export class TrackingPage implements OnInit {

    addSelected: boolean;

    constructor() {
        this.addSelected = true; // TODO check l'url
    }

    ngOnInit() {
    }

}
