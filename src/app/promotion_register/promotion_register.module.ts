import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PromotionRegisterPage } from './promotion_register.page';
import { PromotionRegisterPageRoutingModule } from './promotion_register-routing.module';


import { NgxMaskModule, IConfig } from 'ngx-mask'

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromotionRegisterPageRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [PromotionRegisterPage],
  providers: [NativeAudio]

})
export class PromotionRegisterPageModule {

}