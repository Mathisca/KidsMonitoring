import {Component, OnInit} from '@angular/core';
import {KidService} from '../../../services/kid.service';

@Component({
    selector: 'app-foodcalculator',
    templateUrl: './foodcalculator.page.html',
    styleUrls: ['./foodcalculator.page.scss'],
})
export class FoodcalculatorPage implements OnInit {
    weight: number;
    bottles: number;

    constructor(public kid: KidService) {
        this.weight = kid.lastRecordedWeight();
        if (this.weight === undefined) {
            this.weight = 6;
        }

        this.bottles = 6;
    }

    ngOnInit() {
    }
}
