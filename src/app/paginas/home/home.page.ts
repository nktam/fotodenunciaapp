import {Component, OnInit, Input} from '@angular/core';
import {DenunciasService} from '../../servicios/denuncias.service';
import {DomSanitizer} from '@angular/platform-browser';
import {GraficosService} from '../../servicios/graficos.service';
import {ModalController} from '@ionic/angular';
import {DetallePage} from '../detalle/detalle.page';
import {Denuncia} from '../../modelo/denuncia';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public servicio: DenunciasService,
    public domSanitizer: DomSanitizer,
    public servGra: GraficosService,
    public modalCtrl: ModalController) { }

  ionViewDidEnter() {
    console.log(this.servicio.denuncias);
    console.log(this.servGra.denunciasMes(this.servicio.denuncias));
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public async mostrarDetalles(denuncia: Denuncia) {
    const modal=await this.modalCtrl.create({
      component: DetallePage,
      componentProps: {
        denuncia: denuncia
      }
    });
    await modal.present();
  }

  public denunciasMes() {
    this.servGra.denunciasMes(this.servicio.denuncias);
  }

  p

}
