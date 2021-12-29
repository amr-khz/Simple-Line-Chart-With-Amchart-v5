$(document).ready(function () {

    //Define variables needed for rebuling chart
    window.root = null;
    window.xAxis = null;
    window.data = null;

    var chartName = 'chart';

    data = fetchJSONData();




});





function chartCreatorFunction(data, chartName, color) {







}



// It's just a sample function for retrieving parsed json 
function fetchJSONData() {
    var json = [{"date":"1400/08/10","price":589.32},{"date":"1400/08/11","price":605.29},{"date":"1400/08/12","price":605.15},{"date":"1400/08/13","price":591.93},{"date":"1400/08/14","price":596.79},{"date":"1400/08/15","price":584.43},{"date":"1400/08/16","price":596.01},{"date":"1400/08/17","price":630.07},{"date":"1400/08/18","price":672.51},{"date":"1400/08/19","price":707.82},{"date":"1400/08/20","price":677.66},{"date":"1400/08/21","price":657.7},{"date":"1400/08/22","price":669.41},{"date":"1400/08/23","price":660.63},{"date":"1400/08/24","price":670.87},{"date":"1400/08/25","price":609.75},{"date":"1400/08/26","price":591.67},{"date":"1400/08/27","price":573.66},{"date":"1400/08/28","price":571.97},{"date":"1400/08/29","price":568.64},{"date":"1400/08/30","price":585.54},{"date":"1400/09/01","price":565.17},{"date":"1400/09/02","price":564.27},{"date":"1400/09/03","price":586.85},{"date":"1400/09/04","price":621.05},{"date":"1400/09/05","price":563.05},{"date":"1400/09/06","price":565.06},{"date":"1400/09/07","price":554.39},{"date":"1400/09/08","price":581.91},{"date":"1400/09/09","price":570.45},{"date":"1400/09/10","price":583.04},{"date":"1400/09/11","price":566.33},{"date":"1400/09/12","price":547.16},{"date":"1400/09/13","price":462.04},{"date":"1400/09/14","price":451.48},{"date":"1400/09/15","price":455.7},{"date":"1400/09/16","price":481.19},{"date":"1400/09/17","price":478.75},{"date":"1400/09/18","price":460.55},{"date":"1400/09/19","price":448.78},{"date":"1400/09/20","price":455.45},{"date":"1400/09/21","price":455.88},{"date":"1400/09/22","price":431.51},{"date":"1400/09/23","price":430.76},{"date":"1400/09/24","price":419.41},{"date":"1400/09/25","price":444.35},{"date":"1400/09/26","price":429.81},{"date":"1400/09/27","price":433.97},{"date":"1400/09/28","price":437.99},{"date":"1400/09/29","price":425.78},{"date":"1400/09/30","price":437.37},{"date":"1400/10/01","price":447.8},{"date":"1400/10/02","price":449.24},{"date":"1400/10/03","price":453.77},{"date":"1400/10/04","price":451.68},{"date":"1400/10/05","price":452.79},{"date":"1400/10/06","price":474.53},{"date":"1400/10/07","price":455.74}];
    return json;
}