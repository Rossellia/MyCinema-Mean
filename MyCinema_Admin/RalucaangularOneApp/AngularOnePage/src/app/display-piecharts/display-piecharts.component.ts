import { Component } from '@angular/core';
import { PieChartConfig } from './../PieConfig';
import { GooglePieChartService } from '../google-charts.service.spec';

@Component({
  selector: 'app-piecharts',
  templateUrl: './display-piecharts.component.html',
})
export class DisplayPiechartsComponent {
  data1: any[];
  config1: PieChartConfig;
  elementId1: String;

  data2: any[];
  config2: PieChartConfig;
  elementId2: String;

  ngOnInit(): void {

    //Piechart1 Data & Config
    this.data1 = [
      ['Age', 'Number of People'],
      ['under 7', 4260],
      ['7-14', 3970],
      ['14-18', 3454],
      ['18+', 2390],
  ];
58
    this.config1 = new PieChartConfig('Age Distribution', 0.58);
    this.elementId1 = 'myPieChart1';

    //Piechart2 Data & Config
    this.data2 = [
      ['Gender', 'Number of Movies'],
      ['Action', 4260],
      ['Comedy', 3970],
      ['Drama', 3454],
      ['Animation', 2390],
  ];
    this.config2 = new PieChartConfig('Movie Distribution', 0.58);
    this.elementId2 = 'myPieChart2';
  }

}
