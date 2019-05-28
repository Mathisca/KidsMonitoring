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
            {title: 'Dashboard', path: '/main/dashboard', icon: 'home'},
            {title: 'Tracking', path: '/main/tracking', icon: 'trending-up'},
            {title: 'Reminders', path: '/main/reminders', icon: 'calendar'},
            {title: 'Misc', path: '/main/misc', icon: 'planet'},
            {title: 'Settings', path: '/main/settings', icon: 'switch'},
        ];
    }

    ionViewWillEnter() {
        this.currentPage = this.pages.find(value => value.path === this.router.url);
        if (this.currentPage == null) {
            this.currentPage = this.pages[1];
            this.router.navigateByUrl('/main/dashboard');
        }
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
