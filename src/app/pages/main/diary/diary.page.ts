import {Component, OnInit} from '@angular/core';
import {KidService} from '../../../services/kid.service';
import {DiaryService} from '../../../services/diary.service';

@Component({
    selector: 'app-diary',
    templateUrl: './diary.page.html',
    styleUrls: ['./diary.page.scss'],
})
export class DiaryPage implements OnInit {

    constructor(public kids: KidService, public diary: DiaryService) {
    }

    ngOnInit() {
    }

}
