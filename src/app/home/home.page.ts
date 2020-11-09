import {Component} from '@angular/core';
import {DenunciasService} from '../servicios/denuncias.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Denuncia} from '../modelo/denuncia';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public servicio: DenunciasService, public domSanitizer: DomSanitizer) { }

}
