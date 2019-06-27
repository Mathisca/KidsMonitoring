import {Component, Input, OnInit} from '@angular/core';
import {Kid, KidService} from '../../../services/kid.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-kidcard',
    templateUrl: './kidcard.component.html',
    styleUrls: ['./kidcard.component.scss'],
})
export class KidcardComponent implements OnInit {

    @Input() kid: Kid;
    @Input() index: number;
    monthOld: number;

    constructor(private router: Router, private kidServ: KidService) {
    }

    static monthDiff(d1, d2) {
        let months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth() + 1;
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }

    ngOnInit() {
        this.monthOld = KidcardComponent.monthDiff(new Date(this.kid.birth), new Date());
    }

    onClick() {
        this.kidServ.currentKidIndex = this.index;
    }
}
