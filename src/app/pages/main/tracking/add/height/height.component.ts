import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {KidService} from '../../../../../services/kid.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-height',
    templateUrl: './height.component.html',
    styleUrls: ['./height.component.scss'],
})
export class HeightComponent implements OnInit {

    public addForm: FormGroup;
    myDate: any = new Date().toISOString();

    constructor(public kids: KidService, public formBuilder: FormBuilder) {
        this.addForm = this.formBuilder.group({
            date: ['', [Validators.required]],
            size: ['', [Validators.required]],
        });

    }

    ngOnInit() {
    }

    onSubmit() {
        this.kids.addHeightMeasure(this.addForm.value.size, this.addForm.value.date);
    }
}
