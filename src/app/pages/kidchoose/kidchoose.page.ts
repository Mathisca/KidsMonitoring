import {Component, OnInit} from '@angular/core';
import {KidService} from '../../services/kid.service';

@Component({
    selector: 'app-kidchoose',
    templateUrl: './kidchoose.page.html',
    styleUrls: ['./kidchoose.page.scss'],
})

export class KidchoosePage implements OnInit {

    constructor(public kidServ: KidService) {

    }

    ngOnInit() {
    }

    onRenderItems(event) {
        this.kidServ.moveKids(event);
        event.detail.complete();
    }
}
