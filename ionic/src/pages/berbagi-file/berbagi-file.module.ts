import { SharedModule } from './../../app/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BerbagiFilePage } from './berbagi-file';


@NgModule({
  declarations: [
    BerbagiFilePage,

  ],
  imports: [
    IonicPageModule.forChild(BerbagiFilePage),
    SharedModule
  ],
})
export class BerbagiFilePageModule {}
