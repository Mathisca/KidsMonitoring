import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import {KidchoosePage} from '../kidchoose/kidchoose.page';

export interface MenuItem {
  title: string;
  icon: string;
  component: string;
}


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  pages: Array<MenuItem>;
  currentPage: MenuItem;

  constructor(private menu: MenuController) {
    this.pages = [
        {title: 'Switch kid', component: 'test', icon: 'repeat'},
        {title: 'Switch kid2', component: 'test', icon: 'reorder'},
        ];
  }

  ngOnInit() {
    this.menu.enable(true, 'first');

  }

  openMenu() {
    this.menu.open('first');
  }

  openPage(p: MenuItem) {
    this.menu.close('first');
    this.currentPage = p;
  }
}
