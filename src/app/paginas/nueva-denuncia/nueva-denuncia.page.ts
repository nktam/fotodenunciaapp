import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Plugins, CameraResultType} from '@capacitor/core';
import {DomSanitizer} from '@angular/platform-browser';
import {DenunciasService} from '../../servicios/denuncias.service';
import {Denuncia} from '../../modelo/denuncia';
const {Camera}=Plugins;
const {Geolocation}=Plugins;

@Component({
  selector: 'app-nueva-denuncia',
  templateUrl: './nueva-denuncia.page.html',
  styleUrls: ['./nueva-denuncia.page.scss'],
})
export class NuevaDenunciaPage implements OnInit {

  public imagen;
  private coord: string;
  private formulario: FormGroup;

  constructor(public formBuilder: FormBuilder, public domSanitizer: DomSanitizer, public servicio: DenunciasService) {

    this.formulario=formBuilder.group({
      texto: ['', Validators.compose([Validators.required, Validators.maxLength(60)])]
    });

  }

  ngOnInit() {
  }

  sacarFoto() {
    const image=Camera.getPhoto({
      quality: 60,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      saveToGallery: true,
      width: 500,
      height: 500,
      preserveAspectRatio: true
    }).then((image) => {
      var imageUrl=image.base64String;
      this.imagen="data:image/png;base64, "+imageUrl;
    })

    this.getPosicion();
  }

  async getPosicion() {
    const coordinates=await Geolocation.getCurrentPosition();
    this.coord=`Lat: ${coordinates.coords.latitude} Lng: ${coordinates.coords.longitude}`;
  }

  public nuevaDenuncia(data): void {
    let fecha=new Date();
    if(data) {
      this.servicio.addDenuncia(new Denuncia(-1, data.texto, this.imagen, this.coord, fecha));
    }
  }


}
