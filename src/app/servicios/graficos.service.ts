import {Injectable} from '@angular/core';
import {Denuncia} from '../modelo/denuncia';
import {DenunciasService} from './denuncias.service'

@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  constructor(private denserv: DenunciasService) { }

  public lineChartData: Array<any>=[
    {data: [3, 3, 3, 3, 3, 0], label: 'Sin solucionar'},
    {data: [1, 5, 7, 4, 1, 3], label: 'Solucionadas'},
  ];
  public lineChartLabels: Array<any>=this.formatoMeses(this.GetUltimosMeses(new Date));
  public lineChartOptions: any={responsive: true};
  public lineChartLegend: boolean=true;
  public lineChartType: string='bar';
  public lineChartColors: Array<any>=[
    {
      backgroundColor: 'rgba(170, 138, 131,0.6)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(187, 209, 177,0.7)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];

  // para conseguir los últimos 6 meses desde hoy
  private GetUltimosMeses(fecha: Date): Date[] {
    let i;
    let meses=[];
    let mes=new Date(fecha.setMonth(fecha.getMonth()-5));
    for(i=0; i<6; i++) {
      meses.push(mes);
      mes=new Date(fecha.setMonth(fecha.getMonth()+1));
    }
    return meses
  }

  // formateamos los meses para presentar en el gráfico
  private formatoMeses(meses: Date[]): string[] {
    let nombresMeses=["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    let mesesaño=meses.map(e => nombresMeses[new Date(e).getMonth()]+new Date(e).getFullYear());
    return mesesaño;
  }

  // obtenemos el núm de denuncias/mes de los últimos 6 meses
  // y modificamos los datos de gráfico
  public async denunciasMes() {
    let denuncias=[];
    denuncias=await this.denserv.getDenuncias();
    let denMes=this.GetUltimosMeses(new Date()).map(e => {
      let num=0;
      for(let i=0; i<denuncias.length; i++) {
        if(new Date(e).getMonth()==new Date(denuncias[i].fecha).getMonth())
          num+=1;
      }
      return num;
    });
    this.lineChartData[0]['data']=denMes;
  }

}
