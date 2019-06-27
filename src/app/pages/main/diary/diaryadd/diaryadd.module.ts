import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {DiaryaddPage} from './diaryadd.page';

const routes: Routes = [
    {
        path: '',
        component: DiaryaddPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [DiaryaddPage]
})
export class DiaryaddPageModule {
}
