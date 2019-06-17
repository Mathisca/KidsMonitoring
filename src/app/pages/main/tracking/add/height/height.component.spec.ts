import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeightComponent} from './height.component';

describe('HeightComponent', () => {
    let component: HeightComponent;
    let fixture: ComponentFixture<HeightComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeightComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeightComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
