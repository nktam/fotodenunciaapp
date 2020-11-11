import {Injectable} from '@angular/core';
import {Denuncia} from '../modelo/denuncia'

@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  constructor() { }

  public lineChartData: Array<any>=[
    {data: [4, 5, 7, 4, 2, 3], label: 'Solucionadas'},
    {data: [0, 5, 7, 4, 1, 3], label: 'Sin solucionar'},
  ];

  public lineChartLabels: Array<any>=this.formatoMeses(this.GetUltimosMeses(new Date));

  public lineChartOptions: any={responsive: true};

  public lineChartColors: Array<any>=[

    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },

    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },

    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean=true;
  public lineChartType: string='bar';

  private GetUltimosMeses(fecha: Date): Date[] {
    let i;
    let meses=[];
    for(i=0; i<6; i++) {
      meses.push(fecha.setMonth(fecha.getMonth()-1));
    }
    return meses
  }

  private formatoMeses(meses) {
    let nombresMeses=["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    let mesesaño=meses.map(e => nombresMeses[new Date(e).getMonth()]+new Date(e).getFullYear());
    return mesesaño;
  }

  public denunciasMes(denuncias: Denuncia[]): number[] {
    let denMes=this.GetUltimosMeses(new Date()).map(e => {
      let num=0;
      for(let i=0; i<denuncias.length; i++) {
        if(new Date(e).getMonth()==new Date(denuncias[i].fecha).getMonth())
          num+=1;
      }
      return num;
    });
    return denMes;
  }


}
