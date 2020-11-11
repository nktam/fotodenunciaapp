import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  constructor(public modalCtrl: ModalController, public domSanitizer: DomSanitizer) { }

  ngOnInit() {

  }

  // cerramos el modal
  public cerrar() {
    this.modalCtrl.dismiss({});
  }

}
