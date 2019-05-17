import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


    public loginForm: FormGroup;
    email: FormControl;
    password: FormControl;

    constructor(private auth: AuthService, private formBuilder: FormBuilder) {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.min(8)]]
        });
    }

    ngOnInit() {
        // TODO validator sur form
    }

    login() {
        this.auth.login();
    }

    loginAsGuest() {
        this.auth.login();
    }
}
