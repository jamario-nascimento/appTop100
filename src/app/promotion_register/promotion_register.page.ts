import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Firestore, collectionData, collection,
  DocumentData, QueryDocumentSnapshot, SnapshotOptions,
  Timestamp
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
  phoneMask = '(00) 0 0000-0000';
  cpfMask = '000.000.000-00';
  birthDateMask = '00/00/0000';

  constructor(private formBuilder: FormBuilder, private firestore: Firestore) { }

  ngOnInit(): void {
    this.promotion = history.state as Promotion;

    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
      cellphone: ['', [Validators.required,]],
      cpf: ['', [Validators.required,]],
      birthDate: ['', [Validators.required,]],
      accepted: [false, [Validators.required,]],
    });
  }

  submit() {
    if (this.formGroup.valid && this.formGroup.value.accepted === true) {
      let subscriptions = collection(this.firestore, 'subscriptions');

      const values = {
        ...this.formGroup.value,
        birthDate: Timestamp.fromDate(this.brStringToDate(this.formGroup.value.birthDate)),
      };


      addDoc(subscriptions, { ...values, promotion: this.promotion, });
    }
  }

  brStringToDate(brDateString: string): Date {

    var dateParts = brDateString.split("/");
    const day = parseInt(brDateString.substring(0, 2));    
    const month = parseInt(brDateString.substring(2, 4)) - 1;
    const year = parseInt(brDateString.substring(4, 8));

    return new Date(year, month, day);

  }

}