import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainPage } from './main.page';
import {DashboardPage} from './dashboard/dashboard.page';
import {DashboardPageModule} from './dashboard/dashboard.module';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'dashboard',
        component: DashboardPage,
      }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
      DashboardPageModule
  ],
  declarations: [MainPage]
})
export class MainPageModule {}
