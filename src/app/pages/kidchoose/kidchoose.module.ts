import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {KidchoosePage} from './kidchoose.page';
import {KidcardComponent} from './kidcard/kidcard.component';
import {TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: KidchoosePage
    },
    {
        path: 'add',
        loadChildren: './kidadd/kidadd.module#KidaddPageModule'
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
    declarations: [KidchoosePage, KidcardComponent]
})
export class KidchoosePageModule {
}
