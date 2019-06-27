import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {KidcardComponent} from './kidcard.component';

describe('KidcardComponent', () => {
    let component: KidcardComponent;
    let fixture: ComponentFixture<KidcardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [KidcardComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KidcardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
