import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Firestore, collectionData, collection,
  DocumentData, QueryDocumentSnapshot, SnapshotOptions,
} from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore';


interface Promotion {
  id: string,
  title: string,
  description: string,
  descriptionShort: string,
  imageUrl: string,
  endDate: string,
};

@Component({
  selector: 'app-promotion-register',
  templateUrl: 'promotion_register.page.html',
  styleUrls: ['promotion_register.page.scss'],
})
export class PromotionRegisterPage implements OnInit {

  promotion: Promotion;
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private firestore: Firestore) { }

  ngOnInit(): void {
    this.promotion = history.state as Promotion;

    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required,]],
      cellphone: ['', [Validators.required,]],
      cpf: ['', [Validators.required,]],
      birthDate: ['', [Validators.required,]],
      accepted: [false, [Validators.required,]],
    });
  }

  submit() {
    console.log(this.formGroup.value);
    if (this.formGroup.valid && this.formGroup.value.accepted === true) {
      let promotions = collection(this.firestore, 'subscriptions');
      addDoc(promotions, { ...this.formGroup.value, promotion: this.promotion, });
      console.log("salvo");
    }
  }

}
