import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WeightComponent} from './weight.component';

describe('WeightComponent', () => {
    let component: WeightComponent;
    let fixture: ComponentFixture<WeightComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WeightComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WeightComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
