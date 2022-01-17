import { fetchData } from "./data-fetch";
import {processData} from './data-process';
import {GoogleCharts} from 'google-charts';
import {drawChart} from './draw-chart';

class GoogleChart extends HTMLElement {
   async connectedCallback() {
        console.log('Adding a chart!');
        await placeChart(this);
    }
}

async function placeChart(chart){
    console.log('Adding a chart!');
        await drawChart(chart);
        
        let btn = document.createElement("button");
        btn.innerHTML = "Reload Data";
        chart.appendChild(btn);
        btn.addEventListener('click', async() => await placeChart(chart));
}

GoogleCharts.load(() => {
    console.log('Loading Google Charts...');
    customElements.define('google-chart', GoogleChart);
    }
);