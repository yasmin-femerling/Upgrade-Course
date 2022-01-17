import { fetchData } from "./data-fetch";
import {processData} from './data-process';
import {GoogleCharts} from 'google-charts';

async function getData(source:string, property: string){
    console.log('Fetching data...')
    let jsonReponse = await fetchData(source);
    let data = processData(jsonReponse, property);
    return data;
}

export async function drawChart(chartEl:HTMLElement) {
    let type:string = chartEl.hasAttribute('type') ? 
                        chartEl.getAttribute('type')! :
                        '';
    let title:string = chartEl.hasAttribute('title') ? 
                        chartEl.getAttribute('title')! :
                        '';
    let property:string = chartEl.hasAttribute('property') ? 
                        chartEl.getAttribute('property')! :
                        '';
    let url:string|null = chartEl.hasAttribute('data-source') ? 
                        chartEl.getAttribute('data-source') :
                        null;

    var data = url == null ? [] : await getData(url, property);
    var options = {'title':title};
    
    switch(type) {
        case 'column':
            var chart = new  GoogleCharts.api.visualization.ColumnChart(chartEl);
            break;
        default:
            var chart = new  GoogleCharts.api.visualization.PieChart(chartEl);
    }

    console.log('Drawing chart!')
    chart.draw(data, options);
}
