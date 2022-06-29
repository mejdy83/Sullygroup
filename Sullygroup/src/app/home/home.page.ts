import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';


import { NavController, LoadingController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  itin = [];
  i=1;
  search:string;
  answer=[];
  isOkay: boolean;
  constructor(public afDB: AngularFireDatabase,public navCtrl:NavController) { }
 retour(){
  // this.navCtrl.navigateForward('/');
  this.isOkay=false
 }
  async ionViewWillEnter() {
    await this.list()

    console.log(this.itin)
  }
  async list() {
    this.afDB.list('Itinéraires').snapshotChanges(['child_added']).subscribe(actions => {
      let i=1;
      actions.forEach(async action => { 

        this.itin.push(action.payload.exportVal()['Itinéraire'+i].split(','));
        
        i=i+1;
       })
    });
  }
  traitement(search){
    this.isOkay=false;
    console.log(this.answer)
    let i=1
    this.itin.forEach(element => {
      
      if(element.includes(search)){
        this.isOkay=true;
        this.answer.push({itineraire:'Itinéraire'+i,villes:this.itin[i-1]});
        console.log(this.answer)
        this.search=''
     }
     i=i+1
    });
   
  }
  
}