import {Component, OnInit} from '@angular/core';
import {TermsComponent} from './terms/terms.component';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public modalController: ModalController) {
  }

  ngOnInit() {
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: TermsComponent,
      componentProps: {value: 123}
    });
    return await modal.present();
  }
}
