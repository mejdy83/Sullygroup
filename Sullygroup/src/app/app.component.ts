import { Component } from '@angular/core';

import { NavController, LoadingController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public navCtrl:NavController) {this.navCtrl.navigateForward('/home');}

  
}
