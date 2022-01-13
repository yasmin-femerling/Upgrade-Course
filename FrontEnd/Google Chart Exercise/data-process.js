"use strict";
exports.__esModule = true;
exports.processData = void 0;
function processData(jsonResponse, property, google) {
    var map = mapData(jsonResponse, property);
    return mapToData(map, property, google);
}
exports.processData = processData;
function mapData(jsonResponse, property) {
    var map = new Map();
    jsonResponse.forEach(function (element) {
        if (element[property]) {
            if (map.has(element[property])) {
                map.set(element[property], map.get(element[property]) + 1);
            }
            else {
                map.set(element[property], 1);
            }
        }
    });
    console.log(map);
    return map;
}
function mapToData(map, property, google) {
    var array = [[property, 'Count']];
    map.forEach(function (value, key) { return array.push([key, value]); });
    var data = google.visualization.arrayToDataTable(array);
    return data;
}
