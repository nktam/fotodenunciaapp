import {Pipe, PipeTransform} from '@angular/core';
import {Denuncia} from '../modelo/denuncia';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(lista: Denuncia[]) {
    return lista.reverse();
  }

}
