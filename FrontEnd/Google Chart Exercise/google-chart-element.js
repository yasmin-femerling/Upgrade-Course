// Callback that creates and populates a data table, 
// instantiates the chart, passes in the data and
// draws it.
function drawChart() {
    //Use a json Data source
    //Source of json given by 'data-source' attribute
    var jsonData = $.ajax({
        url:this.getAttribute('data-source'),
        dataType: "json",
        async: false
    }).responseText;

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable(jsonData);
    // Set chart options
    //Title comes from tag 'title' attribute
    var options = {'title':this.getAttribute('title')};

    // Instantiate and draw our chart, passing in some options.
    //Attribute 'type' declares the type of chart to be used
    switch(this.getAttribute('type')) {
        case 'column':
            var chart = new google.visualization.ColumnChart(this);
            break;
        default:
            var chart = new google.visualization.PieChart(this);
    }

    //draw chart
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
