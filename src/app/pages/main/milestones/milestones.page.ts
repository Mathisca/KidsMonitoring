import {Component, OnInit} from '@angular/core';
import {MilestonesService} from '../../../services/milestones.service';

@Component({
    selector: 'app-milestones',
    templateUrl: './milestones.page.html',
    styleUrls: ['./milestones.page.scss'],
})
export class MilestonesPage implements OnInit {
    milestoneSpan = '2mo';


    constructor(public milestones: MilestonesService) {
    }

    ngOnInit() {
    }

}
