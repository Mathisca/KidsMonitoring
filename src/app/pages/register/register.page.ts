import {Component, OnInit} from '@angular/core';
import {TermsComponent} from './terms/terms.component';
import {ModalController, NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    public registerForm: FormGroup;

    constructor(public modalController: ModalController, private navCtrl: NavController, private formBuilder: FormBuilder, private auth: AuthService) {
        if (this.auth.account.username !== undefined && this.auth.account.name !== undefined) {
            this.navCtrl.navigateRoot('/kids');
        }

        this.registerForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            surname: ['', [Validators.required]],
            gender: [''],
            country: [''],
            terms: ['', [Validators.pattern('true')]],

        });

        this.registerForm.patchValue({gender: 'f', country: 'my', terms: 'false'});
    }

    ngOnInit() {
    }


    async presentModal() {
        const modal = await this.modalController.create({
            component: TermsComponent,
            componentProps: {value: 123}
        });
        return await modal.present();
    }

    register(): void {
        this.auth.account.country = this.registerForm.value.country;
        this.auth.account.gender = this.registerForm.value.gender;
        this.auth.account.name = this.registerForm.value.name;
        this.auth.account.surname = this.registerForm.value.surname;

        this.auth.saveData();
        this.navCtrl.navigateRoot('/kids');
    }
}
