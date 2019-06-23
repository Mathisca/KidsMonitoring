import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {CalendarService} from '../../../../services/calendar.service';

@Component({
    selector: 'app-addreminder',
    templateUrl: './addreminder.page.html',
    styleUrls: ['./addreminder.page.scss'],
})
export class AddreminderPage implements OnInit {

    public addForm: FormGroup;

    constructor(public calendar: CalendarService, public formBuilder: FormBuilder, private navCtrl: NavController) {
        this.addForm = this.formBuilder.group({
            title: ['', [Validators.required]],
            start: ['', [Validators.required]],
            end: ['', [Validators.required]],
        });

    }

    ngOnInit() {
    }

    onSubmit() {
        this.calendar.addEvent(this.addForm.value.title, this.addForm.value.start, this.addForm.value.end);
    }


}
