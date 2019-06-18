import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MilestonesPage} from './milestones.page';

describe('MilestonesPage', () => {
    let component: MilestonesPage;
    let fixture: ComponentFixture<MilestonesPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MilestonesPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MilestonesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
