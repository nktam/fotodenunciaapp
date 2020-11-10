import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraficosService {


  constructor() { }

  public lineChartData: Array<any>=[
    {data: [9, 12, 23, 17, 14, 11, 12], label: 'Solucionadas'},
    {data: [14, 18, 20, 21, 21, 15, 11], label: 'Sin solucionar'},
  ];

  public lineChartLabels: Array<any>=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

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


}
