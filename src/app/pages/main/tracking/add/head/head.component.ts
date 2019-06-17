import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {KidService} from '../../../../../services/kid.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-head',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.scss'],
})
export class HeadComponent implements OnInit {
    public addForm: FormGroup;
    myDate: any = new Date().toISOString();

    constructor(public kids: KidService, public formBuilder: FormBuilder, private navCtrl: NavController) {
        this.addForm = this.formBuilder.group({
            date: ['', [Validators.required]],
            size: ['', [Validators.required]],
        });

    }

    ngOnInit() {
    }

    onSubmit() {
        this.kids.addHeadMeasure(this.addForm.value.size, this.addForm.value.date);
    }
}

