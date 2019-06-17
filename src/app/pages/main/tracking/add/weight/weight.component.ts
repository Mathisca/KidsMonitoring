import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {KidService} from '../../../../../services/kid.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-weight',
    templateUrl: './weight.component.html',
    styleUrls: ['./weight.component.scss'],
})
export class WeightComponent implements OnInit {

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
        this.kids.addWeightMeasure(this.addForm.value.size, this.addForm.value.date);
    }

}
