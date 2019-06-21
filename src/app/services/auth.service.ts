import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';

export interface AccountData {
    username: string;
    password: string;
    name: string;
    surname: string;
    gender: string;
    country: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private storage: Storage, private navCtrl: NavController) {
    }

    private _account: AccountData;
    authState = new BehaviorSubject(false);

    get account(): AccountData {
        return this._account;
    }

    set account(value: AccountData) {
        this._account = value;
    }


    login() {
        this.authState.next(true);
        this.navCtrl.navigateRoot('register');
    }

    saveData() {
        this.storage.set('account', this.account);
    }

    isAuthentificated() {
        return this.authState.getValue();
    }

    private setAuthentificated(auth: boolean) {
        this.authState.next(auth);
    }

    public initService() {
        this.storage.get('account').then((val) => {
            if (val != null) {
                this.account = val;
                this.setAuthentificated(true);
            } else {
                this.account = {} as AccountData;
            }
        });
    }
}
