import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TeethComponent} from './teeth.component';

describe('TeethComponent', () => {
    let component: TeethComponent;
    let fixture: ComponentFixture<TeethComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TeethComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TeethComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
