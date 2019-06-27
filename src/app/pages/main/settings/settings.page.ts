import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Location} from '@angular/common';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    constructor(public auth: AuthService, public loc: Location) {
    }

    ngOnInit() {
    }

}
