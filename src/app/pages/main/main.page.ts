import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';

export interface MenuItem {
    title: string;
    icon: string;
    path: string;
}


@Component({
    selector: 'app-main',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

    pages: Array<MenuItem>;
    currentPage: MenuItem;

    constructor(private menu: MenuController, public router: Router) {
        this.pages = [
            {title: 'Switch kid', path: '/kids', icon: 'repeat'},
            {title: 'Dashboard', path: '/app/dashboard', icon: 'home'},
            {title: 'Tracking', path: '/app/tracking', icon: 'trending-up'},
            {title: 'Reminders', path: '/app/reminders', icon: 'calendar'},
            {title: 'Misc', path: '/app/misc', icon: 'planet'},
            {title: 'Guides', path: '/app/guides', icon: 'book'},
            {title: 'Settings', path: '/app/settings', icon: 'switch'},
        ];
    }

    ionViewWillEnter() {
        this.currentPage = this.pages.find(value => this.router.url.includes(value.path));
    }

    ngOnInit() {
        this.menu.enable(true, 'first');
    }

    openMenu() {
        this.menu.open('first');
    }

    openPage(p: MenuItem) {
        this.menu.close('first');
        this.currentPage = p;
    }
}
