import {Injectable} from '@angular/core';
import {from} from 'rxjs';
import {Denuncia} from '../modelo/denuncia';
import {HttpService} from './http.service';
import {GraficosService} from './graficos.service';

@Injectable({
  providedIn: 'root'
})

export class DenunciasService {

  public denuncias: Denuncia[];
  public denuncia: Denuncia;
  public denunciasMes: number[];

  constructor(private http: HttpService, private graServ: GraficosService) {
    this.denuncias=[];
    this.http.getList().subscribe(
      (datos) => {
        this.denuncias=datos.map((denuncia) => Denuncia.fromJson(denuncia)); // actualiza denuncias
      },
      (error) => console.log(error)
    );
  }

  public addDenuncia(denuncia: Denuncia) {
    // 1 creo la tarea en el servidor para recibir id
    this.http.createItem(denuncia).subscribe(
      (data) => {
        this.denuncias=[data, ...this.denuncias]; // actualizo denuncias
      },
      (error) => {console.log(error)}
    );
  }



}

