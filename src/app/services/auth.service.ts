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
    authState = new BehaviorSubject(false);

    constructor(private storage: Storage, private navCtrl: NavController) {
    }

    private _account: AccountData;

    get account(): AccountData {
        return this._account;
    }

    set account(value: AccountData) {
        this._account = value;
    }

    setCountry(country: string) {
        this.account.country = country;
        this.saveData();
    }

    login() {
        this.authState.next(true);
        if (this.account.username !== undefined && this.account.name !== undefined) {
            this.navCtrl.navigateRoot('/kids');
        } else {
            this.navCtrl.navigateRoot('/register');
        }
    }

    saveData() {
        this.storage.set('account', this.account);
    }

    isAuthentificated() {
        return this.authState.getValue();
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

    private setAuthentificated(auth: boolean) {
        this.authState.next(auth);
    }
}
