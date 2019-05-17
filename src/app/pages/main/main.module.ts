import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainPage } from './main.page';
import {DashboardPage} from '../dashboard/dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'test',
        component: DashboardPage,
      }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainPage, DashboardPage]
})
export class MainPageModule {}
