import {Component} from '@angular/core';

import {NavController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AuthService} from './services/auth.service';

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
        private auth: AuthService) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });

        const animationsOptions = {
            animation: 'ios-transition',
            duration: 1000
        };

        this.auth.authState.subscribe(state => {

            console.log('Change stage');
            if (state) {
                console.log('Change stage&&&');
                this.navCtrl.navigateRoot('dashboard');
            } else {
                this.navCtrl.navigateRoot('login');
            }
        });

    }
}
