import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { OnePage } from './../pages/one/one';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  menuItems: any[] = [
    {
      name: 'Artikel',
      page: 'HomePage',
      icon: 'paper',
      params: { type: 'all', name: 'Artikel' }
    },
    {
      name: 'Forum',
      page: 'ForumPage',
      icon: 'chatbubbles',      
      params: { type: 'all', name: 'Forum'}
    },
    {
      name: 'Berbagi File',
      page: 'BerbagiFilePage',
      icon: 'document',      
      params: { type: 'all', name: 'Berbagi File'}
    },
    {
      name: 'Notifikasi',
      page: 'NotifikasiPage',
      icon: 'notifications',      
      params: { type: 'all', name: 'Notifikasi'}
    },
    { 
      name: 'Pengumuman',
      page: 'PengumumanPage',
      icon: 'information-circle',      
      params: { type: 'all', name: 'Pengumuman'}
    },    
    {
      name: 'Keluar',
      page: 'LoginPage',
      icon: 'log-out',      
      params: { type: 'all', name: 'Keluar'}
    }        
  ];

  rootPage: any;

  constructor(private modalCtrl: ModalController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    //set the root page of the app
    this.rootPage = 'LoginPage';   
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.backgroundColorByHexString('dark-primary');
      splashScreen.hide();

    });
  }

  openPage(page) {
    this.nav.setRoot(page.page, page.params);
  }

  pushToPage(){
    // console.log('masuk');
    // this.nav.push('OnePage');
  }  

  openProfile(){
    let modal = this.modalCtrl.create(OnePage);
    modal.present();
  }
}

