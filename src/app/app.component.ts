import {Component} from '@angular/core';

import {NavController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AuthService} from './services/auth.service';
import {KidService} from './services/kid.service';
import {CalendarService} from './services/calendar.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(
        private navCtrl: NavController,
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private auth: AuthService,
        private calendar: CalendarService,
        private kid: KidService) {
        this.initializeApp();
    }

    initializeApp() {
        this.auth.initService();
        this.kid.initService();
        this.calendar.initService();
        this.platform.ready().then(() => {
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
        });

    }
}
