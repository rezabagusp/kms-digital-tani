import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BerbagiFilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-berbagi-file',
  templateUrl: 'berbagi-file.html',
})
export class BerbagiFilePage {

  tabs: any [] = [
    {
      title: 'File Unggah',
      page: 'FileUnggahPage'
    },
    {
      title: 'File Saya',
      page: 'FileSayaPage'
    },
    {
      title: 'File DIsukai',
      page: 'FileDisukaiPage'
    }
  ]

  pageTitle: string = 'Berbagi File';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BerbagiFilePage');
  }

}
