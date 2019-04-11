import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireServiceService {

  constructor(public db: AngularFirestore) { }

  createUser(value){
    return this.db.collection(value.UID).add({
      Alappuzha: value.Alappuzha,
      Alathur: value.Alathur,
      Attingal: value.Attingal,
      Chalakudy: value.Chalakudy,
      Ernakulam: value.Ernakulam,
      Idukki: value.Idukki,
      Kannur: value.Kannur,
      Kasaragod: value.Kasaragod,
      Kollam: value.Kottayam,
      Kozhikode: value.Kozhikode,
      Malappuram: value.Malappuram,
      Mavelikkara: value.Mavelikkara,
      Palakkad: value.Palakkad,
      Pathanamthitta: value.Pathanamthitta,
      Ponnani: value.Ponnani,
      Thiruvananthapuram: value.Thiruvananthapuram,
      Thrissur: value.Thrissur,
      Vatakara: value.Vatakara,
      Wayanad: value.Wayanad
    });
  }

  getPeople(){
    return this.db.collection('/userdata').snapshotChanges();
}

}
