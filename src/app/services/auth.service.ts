import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authState = new BehaviorSubject(false);

    constructor() {
    }

    login() {
        this.authState.next(true);
    }

    isAuthentificated() {
        return this.authState.getValue();
    }
}
