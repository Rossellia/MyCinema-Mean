import { Component, Input, OnInit } from '@angular/core';

import { GooglePieChartService } from './../google-charts.service.spec';
import { PieChartConfig } from './../PieConfig';

declare var google: any;

@Component({
  selector: 'pie-chart',
  templateUrl: './piecharts.component.html',
  providers: [GooglePieChartService]
})

export class PieChartComponent implements OnInit {

    @Input() data: any[];
    @Input() config: PieChartConfig;
    @Input() elementId: String;

    constructor(private _pieChartService: GooglePieChartService) {}

    ngOnInit(): void {
        this._pieChartService.BuildPieChart(this.elementId, this.data, this.config); 
    }
}