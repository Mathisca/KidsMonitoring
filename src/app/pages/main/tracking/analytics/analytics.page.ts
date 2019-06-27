import {Component, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {WhodataService} from '../../../../services/whodata.service';
import {KidService, Measure} from '../../../../services/kid.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-analytics',
    templateUrl: './analytics.page.html',
    styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage {
    @ViewChild('analyticsGraph') analyticsGraph;
    dataMin = [];
    dataMed = [];
    dataMax = [];
    data = [];
    xData = [];

    graphType = 'w';
    span = 'w';

    endspan: number;
    currentVals: string;
    chart: Chart;

    constructor(private whoData: WhodataService, private kids: KidService, public translate: TranslateService) {
    }

    ionViewDidEnter() {
        this.plotGraph();
        this.recalculateData();
    }

    plotGraph() {
        this.analyticsGraph = new Chart(this.analyticsGraph.nativeElement, {
            type: 'line',
            data: {
                labels: this.xData,
                datasets: [
                    {
                        label: this.translate.instant('Min'),
                        data: this.dataMin,
                        fill: false,
                        borderColor: 'rgba(255,0,30,0.76)',
                        backgroundColor: '#FFFFFF',
                    }, {
                        label: this.translate.instant('Average'),
                        data: this.dataMed,
                        fill: false,
                        borderColor: 'rgba(27,255,16,0.53)',
                        borderDash: [10, 5],
                        backgroundColor: '#FFFFFF',
                    }, {
                        borderColor: 'rgba(255,0,30,0.76)',
                        label: this.translate.instant('Max'),
                        data: this.dataMax,
                        fill: false,
                        backgroundColor: '#FFFFFF',
                    }, {
                        borderColor: 'rgba(0,0,0,0.76)',
                        label: this.translate.instant('Data'),
                        data: this.data,
                        fill: false,
                        point: {radius: 1},
                        backgroundColor: '#FFFFFF',
                    },
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {point: {radius: 0}},
                title: {
                    display: true,
                    text: this.translate.instant('Analytic Graph')
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: this.translate.instant('Days')
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: this.translate.instant('Value')
                        }
                    }]
                }
            }
        });
    }

    recalculateData() {

        const isMale = this.kids.kidsArray[this.kids.currentKidIndex].gender.match('m');
        this.dataMin = [];
        this.dataMed = [];
        this.dataMax = [];
        this.xData = [];
        this.data = [];

        let pData: Measure[];

        if (this.graphType.match('w')) {
            if (isMale) {
                this.currentVals = this.whoData.wfa_boys;
            } else {
                this.currentVals = this.whoData.wfa_girls;
            }
            pData = this.kids.kidsArray[this.kids.currentKidIndex].weightmeasures;
            this.analyticsGraph.chart.options.scales.yAxes[0].scaleLabel.labelString = this.translate.instant('Weight (kg)');
        } else if (this.graphType.match('h')) {
            if (isMale) {
                this.currentVals = this.whoData.lhfa_boys;
            } else {
                this.currentVals = this.whoData.lhfa_girls;
            }
            pData = this.kids.kidsArray[this.kids.currentKidIndex].heightmeasures;

            this.analyticsGraph.chart.options.scales.yAxes[0].scaleLabel.labelString = this.translate.instant('Height (cm)');

        } else {
            if (isMale) {
                this.currentVals = this.whoData.hcfa_boys;
            } else {
                this.currentVals = this.whoData.hcfa_girls;
            }
            pData = this.kids.kidsArray[this.kids.currentKidIndex].headmeasures;

            this.analyticsGraph.chart.options.scales.yAxes[0].scaleLabel.labelString = this.translate.instant('Head circumference (cm)');

        }

        const jsonObj = JSON.parse(this.currentVals);

        if (this.span.match('w')) {
            this.endspan = 180;
        } else {
            this.endspan = jsonObj.length;
        }

        for (const measure of pData) {
            const days = Math.abs(Math.ceil((new Date(measure.adddate).valueOf() -
                new Date(this.kids.kidsArray[this.kids.currentKidIndex].birth).valueOf())
                / 1000.0 / 60.0 / 60.0 / 24.0));
            if (days <= this.endspan) {
                this.data.push({x: days, y: measure.value});
            }
        }


        for (let i = 0; i < this.endspan; i++) {
            this.dataMin.push({x: jsonObj[i].day, y: jsonObj[i].neg});
            this.dataMed.push({x: jsonObj[i].day, y: jsonObj[i].norm});
            this.dataMax.push({x: jsonObj[i].day, y: jsonObj[i].pos});
        }


        for (let i = 0; i <= this.endspan; i++) {
            this.xData.push(i);
        }
        this.analyticsGraph.chart.data.datasets[0].data = this.dataMin;
        this.analyticsGraph.chart.data.datasets[1].data = this.dataMed;
        this.analyticsGraph.chart.data.datasets[2].data = this.dataMax;
        this.analyticsGraph.chart.data.datasets[3].data = this.data;

        this.analyticsGraph.chart.data.labels = this.xData;
        this.analyticsGraph.chart.update();
    }
}
