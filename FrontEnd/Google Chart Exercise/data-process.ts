export function processData(jsonResponse:string[], property:string, google){
   let map = mapData(jsonResponse,property);
   return mapToData(map, property,google);
}

function mapData(jsonResponse:string[], property: string): Map<string,number>{
    let map: Map<string,number> = new Map();
    jsonResponse.forEach(element => {
        if(element[property]){
            if(map.has(element[property])){
                map.set(element[property], map.get(element[property])! + 1);
            } else{
                map.set(element[property],1);
            }
        }
    });
    console.log(map)
    return map;
}

function mapToData(map:Map<string,number>, property:string, google){
    let array: [string,number|string][] = [[property, 'Count']];
    map.forEach((value:number, key:string) => array.push([key,value]));
    var data = google.visualization.arrayToDataTable(array);
    return data;
}
