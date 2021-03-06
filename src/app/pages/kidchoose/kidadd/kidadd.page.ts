import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {KidService} from '../../../services/kid.service';
import {NavController} from '@ionic/angular';


@Component({
    selector: 'app-kidadd',
    templateUrl: './kidadd.page.html',
    styleUrls: ['./kidadd.page.scss'],
})
export class KidaddPage {
// tslint:disable-next-line:max-line-length
    image = 'data:image/jpeg;base64,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';
    public addForm: FormGroup;

    constructor(public formBuilder: FormBuilder, public camera: Camera, private kidServ: KidService, private nav: NavController) {
        this.addForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            surname: ['', [Validators.required]],
            birthdate: ['', [Validators.required]],
            gender: ['', [Validators.required]]
        });

        this.addForm.patchValue({gender: 'f'});
    }

    takePicture() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then((imageData) => {
            this.image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            console.log('Error : ' + err);
        });

    }

    onSubmit() {
        this.kidServ.addKid(this.addForm.value.birthdate,
            this.addForm.value.name,
            this.addForm.value.surname,
            this.image,
            this.addForm.value.gender);

        this.nav.pop();
    }
}
