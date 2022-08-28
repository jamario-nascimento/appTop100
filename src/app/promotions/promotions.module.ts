import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PromotionsPage } from './promotions.page';
import { PromotionsPageRoutingModule } from './promotions-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromotionsPageRoutingModule,
  ],
  declarations: [PromotionsPage],
  providers: [NativeAudio]

})
export class PromotionsPageModule {

}