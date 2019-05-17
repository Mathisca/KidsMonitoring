import {Component, OnInit} from '@angular/core';
import {Kid, KidService} from '../../services/kid.service';
import {Location} from '@angular/common';

@Component({
    selector: 'app-kidchoose',
    templateUrl: './kidchoose.page.html',
    styleUrls: ['./kidchoose.page.scss'],
})

export class KidchoosePage implements OnInit {

    constructor(public kidServ: KidService, private location: Location) {

    }

    ngOnInit() {
    }

    onRenderItems(event) {
        console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
        this.kidServ.moveKids(event);
        event.detail.complete();
    }

    onClick() {
        console.log('go');

        this.location.go('/dashboard');
    }
}
