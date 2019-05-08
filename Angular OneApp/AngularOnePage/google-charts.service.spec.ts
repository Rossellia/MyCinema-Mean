import { GoogleChartsBaseService } from './google-charts.service';
import { Injectable } from '@angular/core';
import { PieChartConfig } from './PieConfig';

declare var google: any;

@Injectable()
export class GooglePieChartService extends GoogleChartsBaseService {

  constructor() { super(); }

  public BuildPieChart(elementId: String, data: any[], config: PieChartConfig) : void {  
    var chartFunc = () => { return new google.visualization.PieChart(document.getElementById(<string>elementId)); };
    var options = {
            title: config.title,
            pieHole: config.pieHole,
            titleTextStyle: {fontSize: 15, fontName: 'Source Sans Pro', regular: true},
            'width': 400, 
            'height': 250,
            colors: ['#55D9FD', '#FE8575', '#FFD983', '#A49DFF'],
            backgroundColor: '#FEFCFF',
            legend: {
              position: 'right',
              alignment: 'center',
              textStyle: {fontSize: 11, fontName: 'Source Sans Pro', regular: true}
          }, pieSliceText: 'none'
      };

    this.buildChart(data, chartFunc, options);
  }
}