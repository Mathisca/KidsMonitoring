import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {FoodcalculatorPage} from './foodcalculator.page';

const routes: Routes = [
    {
        path: '',
        component: FoodcalculatorPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [FoodcalculatorPage]
})
export class FoodcalculatorPageModule {
}
