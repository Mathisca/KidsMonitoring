import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage {


    public loginForm: FormGroup;

    constructor(private auth: AuthService, private formBuilder: FormBuilder) {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }

    login() {
        if (this.loginForm.dirty && this.loginForm.valid) {
            let email: string = this.loginForm.value.email;
            let password: string = this.loginForm.value.password;
            console.log('Email: ' + email + ' pass : ' + password);
            this.auth.login();
        }
    }

    loginAsGuest() {
        this.auth.account.username = 'guest';
        this.auth.login();
    }
}
