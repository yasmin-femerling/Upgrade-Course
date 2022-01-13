import { fetchData } from "./data-fetch";
import { processData } from "./data-process";

var google:any;

async function getData(source:string, property: string){
    let jsonReponse = await fetchData(source);
    let data = processData(jsonReponse, property,google);
    console.log(data)
}

function drawChart() {
    let type:string = this.getAttribute('type');
    let title:string = this.getAttribute('title');
    let property:string = this.getAttribute('property');
    let url:string = 'https://randomuser.me/api?results=100';

    var data = getData(url, property);
    var options = {'title':title};
    
    switch(type) {
        case 'column':
            var chart = new google.visualization.ColumnChart(this);
            break;
        default:
            var chart = new google.visualization.PieChart(this);
    }

    chart.draw(data, options);
}

class GoogleChart extends HTMLElement {
    connectedCallback() {
        console.log('Adding a chart!');
        drawChart.call(this);
    } 
}

google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(() => {
    console.log('Google Charts loaded.');
    customElements.define('google-chart', GoogleChart);
});
