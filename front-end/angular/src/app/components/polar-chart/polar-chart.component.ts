import { HttpClient } from '@angular/common/http';
import { RegiaoService } from '../../services/regiao.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { Observable, Subscription } from 'rxjs';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  styleUrls: ['./polar-chart.component.scss']
})
export class PolarChartComponent implements OnInit {


  listaQtdHabitantes$ : number[] = [];
  listaNomesRegioes$: string[] = [];
  isLoadedQtd: boolean = false;
  isLoadedNames: boolean = false;

  constructor(private regiaoService: RegiaoService) { }

  ngOnInit(): void
  {
    this.atualizarNomesRegioes()
    this.atualizarQtdHabitantes()
  }

  atualizarQtdHabitantes()
  {
    this.regiaoService.getQtdHabitantes().subscribe(
      (data) => {
        this.listaQtdHabitantes$ = data;
        console.log(this.listaQtdHabitantes$)
        console.log(data)

        console.log('dados do chart agora antes do subscribe')
        console.log(this.chartData.datasets[0])
        console.log('igualando as listas')
        this.chartData.datasets[0].data = this.listaQtdHabitantes$
        console.log('dados do chart agora depois do subscribe')
        console.log(this.chartData.datasets[0])
        this.isLoadedQtd = true;
      }
    )
  }

  atualizarNomesRegioes()
  {
    this.regiaoService.getNomesRegioes().subscribe(
      (data) => {
        this.listaNomesRegioes$ = data;
        console.log(this.listaNomesRegioes$)
        console.log(data)
        this.chartData.labels = this.listaNomesRegioes$;
        this.isLoadedNames = true;
      }
    )
  }

  // PolarArea
  polarAreaLegend = true;
  polarAreaChartType: ChartType = 'polarArea';
  polarAreaChartLabels: string[] = this.listaNomesRegioes$;

  chartData: ChartData<'polarArea'> = {
    labels: this.listaNomesRegioes$,
    datasets:
    [
      {
        data: this.listaQtdHabitantes$,
        label: 'Section 1'
      }
    ]
  };

   // events
   public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
     console.log(event, active);
   }
   public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
     console.log(event, active);
   }

}
