import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {KidService} from '../../../services/kid.service';
import {Location} from '@angular/common';

@Component({
    selector: 'app-kidadd',
    templateUrl: './kidadd.page.html',
    styleUrls: ['./kidadd.page.scss'],
})
export class KidaddPage implements OnInit {
    name: string;
    surname: string;
    birthdate: string;
    image: string;

    constructor(public formBuilder: FormBuilder, public camera: Camera, private kidServ: KidService, private location: Location) {

    }

    takePicture() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            this.image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
        });

    }

    ngOnInit() {

    }

    onSubmit() {
        this.kidServ.addKid(0, this.name, this.surname, this.image);
        this.location.back();
    }
}
