import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

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

    constructor(private menu: MenuController, public router: Router, public translate: TranslateService) {
        this.pages = [
            {title: this.translate.instant('Switch kid'), path: '/kids', icon: 'repeat'},
            {title: this.translate.instant('Dashboard'), path: '/app/dashboard', icon: 'home'},
            {title: this.translate.instant('Tracking'), path: '/app/tracking', icon: 'trending-up'},
            {title: this.translate.instant('Reminders'), path: '/app/reminders', icon: 'calendar'},
            {title: this.translate.instant('Milestones'), path: '/app/milestones', icon: 'planet'},
            {title: this.translate.instant('Diray'), path: '/app/diary', icon: 'book'},
            {title: this.translate.instant('Food Calculator'), path: '/app/food', icon: 'calculator'},
            {title: this.translate.instant('Guides'), path: '/app/guides', icon: 'help-circle'},
            {title: this.translate.instant('Settings'), path: '/app/settings', icon: 'switch'},
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
