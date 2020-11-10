import {Component, OnInit, Input} from '@angular/core';
import {DenunciasService} from '../../servicios/denuncias.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
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
    private router: Router,
    public servGra: GraficosService,
    public modalCtrl: ModalController) { }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public async detalles(denuncia: Denuncia) {
    const modal=await this.modalCtrl.create({
      component: DetallePage,
      componentProps: {
        denuncia: denuncia
      }
    });
    await modal.present();
  }

}
