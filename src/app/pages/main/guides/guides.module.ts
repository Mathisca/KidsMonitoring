import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {GuidesPage} from './guides.page';
import {TeethComponent} from './teeth/teeth.component';
import {TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: GuidesPage,
    },
    {
        path: 'teeth',
        component: TeethComponent
    }

];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        TranslateModule.forChild()
    ],
    declarations: [GuidesPage, TeethComponent]
})
export class GuidesPageModule {
}
