import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {DomSanitizer} from '@angular/platform-browser';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  ILatLng,
  Marker,
  BaseArrayClass
} from '@ionic-native/google-maps';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  map: GoogleMap;
  denunciaProp;

  constructor(public modalCtrl: ModalController, public domSanitizer: DomSanitizer, private platform: Platform) { }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
  }

  // cerramos el modal
  public cerrar() {
    this.modalCtrl.dismiss({});
  }

  loadMap() {
    let POINTS: BaseArrayClass<any>=new BaseArrayClass<any>([
      {
        position: {lat: 41.79883, lng: 140.75675},
        iconData: "./assets/imgs/Number-1-icon.png"
      },
      {
        position: {lat: 41.799240000000005, lng: 140.75875000000002},
        iconData: "https://mapsplugin.github.io/ionic-googlemaps-quickdemo-v4/assets/imgs/Number-2-icon.png"
      },
      {
        position: {lat: 41.797650000000004, lng: 140.75905},
        iconData: {
          url: "https://mapsplugin.github.io/ionic-googlemaps-quickdemo-v4/assets/imgs/Number-3-icon.png",
          size: {
            width: 24,
            height: 24
          }
        }
      },
      {
        position: {lat: 41.79637, lng: 140.76018000000002},
        title: "4",
        iconData: "blue"
      }
    ]);

    let bounds: ILatLng[]=POINTS.map((data: any, idx: number) => {
      console.log(data);
      return data.position;
    });

    this.map=GoogleMaps.create('map_canvas', {
      camera: {
        target: bounds
      }
    });
    POINTS.forEach((data: any) => {
      data.disableAutoPan=true;
      let marker: Marker=this.map.addMarkerSync(data);
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(this.onMarkerClick);
      marker.on(GoogleMapsEvent.INFO_CLICK).subscribe(this.onMarkerClick);
    });

  }

  onMarkerClick(params: any) {
    let marker: Marker=<Marker>params[1];
    let iconData: any=marker.get('iconData');
    marker.setIcon(iconData);
  }

}
