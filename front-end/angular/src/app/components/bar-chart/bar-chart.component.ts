import { RegiaoService } from './../../services/regiao.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: [ './bar-chart.component.scss' ],
})
export class BarChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

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
        this.barChartData.datasets[0].data = this.listaQtdHabitantes$
        this.isLoadedQtd = true;
      }
    )
  }

  atualizarNomesRegioes()
  {
    this.regiaoService.getNomesRegioes().subscribe(
      (data) => {
        this.listaNomesRegioes$ = data;
        this.barChartData.labels = this.listaNomesRegioes$;
        this.isLoadedNames = true;
      }
    )
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [  ],
    datasets: [
      { data: [ ], label: 'População por bairro' },
    ]
  };


  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
}
