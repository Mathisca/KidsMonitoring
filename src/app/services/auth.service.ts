import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authState = new BehaviorSubject(false);
    token: string;

    constructor(private storage: Storage, private navCtrl: NavController) {
    }


    login() {
        // TODO Stub
        //this.storage.set('token', 'wow');
        console.log('Set token');
        this.authState.next(true);
        this.navCtrl.navigateRoot('register');
    }

    isAuthentificated() {
        return this.authState.getValue();
    }

    private setAuthentificated(auth: boolean) {
        this.authState.next(auth);
    }

    private isTokenValid() {
        //TODO check if valid and disconnect if not
    }

    public initService() {
        this.storage.get('token').then((val) => {
            this.token = val;
            console.log('Token : ' + val);
            if (this.token != null) {
                this.setAuthentificated(true);
            }
        });
    }
}
