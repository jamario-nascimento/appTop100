import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PromotionRegisterPage } from './promotion_register.page';
import { PromotionRegisterPageRoutingModule } from './promotion_register-routing.module';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromotionRegisterPageRoutingModule,    
    ComponentsModule,
  ],
  declarations: [PromotionRegisterPage],
  providers: [NativeAudio]

})
export class PromotionRegisterPageModule {

}