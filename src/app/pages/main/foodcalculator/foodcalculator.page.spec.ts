import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FoodcalculatorPage} from './foodcalculator.page';

describe('FoodcalculatorPage', () => {
    let component: FoodcalculatorPage;
    let fixture: ComponentFixture<FoodcalculatorPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FoodcalculatorPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FoodcalculatorPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
