import {Component, OnInit} from '@angular/core';
import {TermsComponent} from './terms/terms.component';
import {ModalController, NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    public registerForm: FormGroup;

    constructor(public modalController: ModalController, private navCtrl: NavController, private formBuilder: FormBuilder) {
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
        console.log(JSON.stringify( this.registerForm.value));
        this.navCtrl.navigateRoot('/kids');

    }
}
