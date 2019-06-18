import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {AuthService} from '../../../services/auth.service';
import {KidService} from '../../../services/kid.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

    constructor(private menu: MenuController, public auth: AuthService, public kids: KidService) {
    }

    ngOnInit() {
    }

}
