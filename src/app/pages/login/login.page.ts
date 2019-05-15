import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    form = new FormGroup({
        email: new FormControl('Nancy', Validators.minLength(2)),
        password: new FormControl('Drew'),
    });

    constructor(private auth: AuthService) {
    }

    ngOnInit() {
        // TODO validator sur form
    }

    login() {
        this.auth.login();
    }
}
