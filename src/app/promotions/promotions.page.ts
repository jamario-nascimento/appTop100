import { Component } from '@angular/core';
import {
  Firestore, collectionData, collection,
  DocumentData, QueryDocumentSnapshot, SnapshotOptions,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';


interface Promotion {
  id: string,
  title: string,
  descriptionShort: string,
  imageUrl: string,
};

const promotionConverter = {
  toFirestore(promotion: Promotion): DocumentData {
    return {
      title: promotion.title,
      descriptionShort: promotion.descriptionShort,
      imageUrl: promotion.imageUrl,
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Promotion {
    const data = snapshot.data(options)!;
    const id = snapshot.id;
    let promotion: Promotion = {
      id: id,
      title: data.title,
      descriptionShort: data.descriptionShort,
      imageUrl: data.imageUrl,
    }
    return promotion;
  }
};


@Component({
  selector: 'app-promotions',
  templateUrl: 'promotions.page.html',
  styleUrls: ['promotions.page.scss'],
})
export class PromotionsPage {

  promotions: Observable<Promotion[]>;
  constructor(firestore: Firestore) {
    const promotions = collection(firestore, 'promotions').withConverter(promotionConverter);
    this.promotions = collectionData(promotions);
  }

}
