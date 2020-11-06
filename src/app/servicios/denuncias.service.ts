import {Injectable} from '@angular/core';
import {Denuncia} from '../modelo/denuncia';
import {HttpService} from './http.service';


@Injectable({
  providedIn: 'root'
})
export class DenunciasService {

  public denuncias: Denuncia[];

  constructor(private http: HttpService) {
    this.denuncias=[];

    // 2 cargo las denuncias del servidor esta son las de fiar machacan al storage
    this.http.getList().subscribe(
      (datos) => {
        //this.denuncias=datos; esto revisar
        this.denuncias=datos.map((denuncia) => Denuncia.fromJson(denuncia)); // actualiza denuncias
      },
      (error) => console.log(error)
    );

  }

  public addTarea(denuncia: Denuncia) {
    // 1 creo la tarea en el servidor para recibir id
    this.http.createItem(denuncia).subscribe(
      (data) => {
        this.denuncias=[data, ...this.denuncias]; // actualizo denuncias
      },
      (error) => {console.log(error)}
    );
  }

  // para buscar la posición de la tarea en el array  
  public buscarTarea(denuncia: Denuncia) {
    for(let i=0; i<this.denuncias.length; i++) {
      if(this.denuncias[i].id===denuncia.id) {
        return i;
      }
    }
  }

  public modificarTarea(tarea, descripcion, importante, realizada, id) {
    const pos=this.buscarTarea(tarea);
    this.denuncias[pos]={descripcion, importante, realizada, id}; // modifico la tarea
    this.http.updateItem(id, this.denuncias[pos]).subscribe( // modificola tarea en el servidor
      (data) => {
        this.denuncias=[...this.denuncias]; // actualizo denuncias para recargar la lista
      },
      (error) => {console.log(error)}
    );

  }

  public eliminarTarea(tarea) {
    const pos=this.buscarTarea(tarea);
    this.http.deleteItem(tarea.id).subscribe( // elimito tarea del servidor
      (data) => {
        this.denuncias=[...this.denuncias.slice(0, pos), ...this.denuncias.slice(pos+1)]; // si se elimina correctamente la elimino de denuncias
      },
      (error) => {console.log(error)}
    );
  }
}
}
