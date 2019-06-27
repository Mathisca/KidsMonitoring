import {Component, OnInit} from '@angular/core';
import {DiaryService} from '../../../../services/diary.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {KidService} from '../../../../services/kid.service';

@Component({
    selector: 'app-diaryadd',
    templateUrl: './diaryadd.page.html',
    styleUrls: ['./diaryadd.page.scss'],
})
export class DiaryaddPage implements OnInit {
    addForm: FormGroup;

    constructor(private dirary: DiaryService, public formBuilder: FormBuilder, private nav: NavController, public kids: KidService) {
        this.addForm = this.formBuilder.group({
            title: ['', [Validators.required]],
            notes: ['', [Validators.required]],
            date: ['', [Validators.required]]
        });

    }

    ngOnInit() {
    }

    onSubmit() {
        this.dirary.addDiary(this.addForm.value.title, this.addForm.value.notes, this.addForm.value.date);
        this.nav.pop();
    }
}
