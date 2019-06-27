import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {DiaryPage} from './diary.page';

const routes: Routes = [
    {
        path: '',
        component: DiaryPage
    },
    {
        path: 'add',
        loadChildren: './diaryadd/diaryadd.module#DiaryaddPageModule'
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [DiaryPage]
})
export class DiaryPageModule {
}
