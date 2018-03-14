import { OnePage } from './../one/one';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController, ModalController } from 'ionic-angular'

/**
 * Generated class for the ArtikelSayaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-artikel-saya',
  templateUrl: 'artikel-saya.html',
})
export class ArtikelSayaPage {

  actionSheetOption = {
     title: 'Modify your album',
     buttons: [
       {
         text: 'Destructive',
         role: 'destructive',
         handler: () => {
           console.log('Destructive clicked');
         }
       },
       {
         text: 'Archive',
         handler: () => {
           console.log('Archive clicked');
         }
       },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
  }
  actionSheet: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtikelSayaPage');
  }

  presentActionSheet(){
    // actionsheet controller need to be re create if once open
    this.actionSheet = this.actionSheetCtrl.create(this.actionSheetOption);
    this.actionSheet.present();
  }
  openModal(){
    let modal = this.modalCtrl.create(OnePage);
    modal.present();
  }

}
