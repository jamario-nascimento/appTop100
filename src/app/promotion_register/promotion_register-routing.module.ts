import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionRegisterPage } from './promotion_register.page';

const routes: Routes = [
  {
    path: '',
    component: PromotionRegisterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRegisterPageRoutingModule { }
