
    const url_nrg = "CO2_energy_sectors.csv";
    const csvPrm = papaPromise(url_nrg);
    var theDom = document.getElementById('chart_two');
    var theChart = echarts.init(theDom);
    var option;
    var theData2 = []
    var theData3 =[]
    csvPrm.then(function (results) {
        results.data.forEach((row) => {
            
            theData3.push(row.Year)
            theData2.push({Name: row.Year, Coal: row.Coal, Oil: row.Oil, NG: row.Natural_gas, NA: row.Other})

        })
console.log(theData2)
var keyNames = Object.keys(theData2[0]);

option = {
    tooltip: {
        position: 'top'
    },
    grid: {
        height: '50%',
        top: '10%'
    },
    xAxis: {
        type: 'category',
        data: Object.keys(theData2[0]),
        splitArea: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: theData2,
        splitArea: {
            show: true
        }
    },
    visualMap: {
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%'
    },
    series: [{
        name: '',
        type: 'heatmap',
        data: theData2,
        label: {
            show: true
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};

theChart.setOption(option)
window.onresize = function() {
    myChart.resize();
  };
  });
  function papaPromise(url) {
        return new Promise(function (resolve, reject) {
          Papa.parse(url, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: resolve,
          });
        });
      }
