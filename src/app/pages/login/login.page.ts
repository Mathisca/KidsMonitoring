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
            // const email: string = this.loginForm.value.email;
            // const password: string = this.loginForm.value.password;
            this.auth.login();
        }
    }

    loginAsGuest() {
        this.auth.account.username = 'guest';
        this.auth.login();
    }
}
