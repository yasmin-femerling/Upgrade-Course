import {GoogleCharts} from 'google-charts';

export function processData(jsonResponse:string[], property:string){
   let map = mapData(jsonResponse,property);
   return mapToData(map, property);
}

function mapData(jsonResponse:string[], property: string): Map<string,number>{
    let map: Map<string,number> = new Map();
    jsonResponse.forEach(element => {
        if(element[property] != null){
            if(map.has(element[property])){
                map.set(String(element[property]), map.get(element[property])! + 1);
            } else{
                map.set(String(element[property]),1);
            }
        }
    });
    return map;
}

function mapToData(map:Map<string,number>, property:string){
    let array: [string,number|string][] = [[property, 'Count']];
    map.forEach((value:number, key:string) => array.push([key,value]));
    var data = GoogleCharts.api.visualization.arrayToDataTable(array);
    return data;
}
