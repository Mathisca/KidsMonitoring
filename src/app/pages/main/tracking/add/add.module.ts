import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {AddPage} from './add.page';
import {HeadComponent} from './head/head.component';
import {WeightComponent} from './weight/weight.component';
import {HeightComponent} from './height/height.component';
import {TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: AddPage
    }, {
        path: 'head',
        component: HeadComponent
    }, {
        path: 'weight',
        component: WeightComponent
    }, {
        path: 'height',
        component: HeightComponent
    },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        TranslateModule.forChild()
    ],
    declarations: [AddPage, HeadComponent, HeightComponent, WeightComponent]
})
export class AddPageModule {
}
