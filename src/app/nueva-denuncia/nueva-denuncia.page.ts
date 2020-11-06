import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Plugins, CameraResultType} from '@capacitor/core';
import {DomSanitizer} from '@angular/platform-browser';
const {Camera}=Plugins;
const {Geolocation}=Plugins;



@Component({
  selector: 'app-nueva-denuncia',
  templateUrl: './nueva-denuncia.page.html',
  styleUrls: ['./nueva-denuncia.page.scss'],
})
export class NuevaDenunciaPage implements OnInit {

  public imagen;
  private formulario: FormGroup;

  constructor(public formBuilder: FormBuilder, public domSanitizer: DomSanitizer) {
    this.formulario=formBuilder.group({
      texto: ['', Validators.compose([Validators.required, Validators.maxLength(60)])],
      importante: [false]
    });
  }

  ngOnInit() {
  }

  sacarFoto() {
    const image=Camera.getPhoto({
      quality: 60,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      saveToGallery: true,
      width: 500,
      height: 500,
      preserveAspectRatio: true
    }).then((image) => {
      var imageUrl=image.webPath;
      // se asigna la url a la variable que se enlaza desde la vista
      this.imagen=imageUrl;
      console.log(this.imagen);
    })

    this.getPosicion();
    console.log('este es xxxxxx:'+this.mostrarPosicion());
  }

  async getPosicion() {
    const coordinates=await Geolocation.getCurrentPosition();
    console.log('Current', coordinates.coords.latitude);
    console.log('Current', coordinates.coords.longitude);
    console.log('Current', new Date(coordinates.timestamp));
  }

  mostrarPosicion() {
    const wait=Geolocation.watchPosition({}, (position, err) => {
    })
  }


}
