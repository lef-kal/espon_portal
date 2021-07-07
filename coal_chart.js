const csvUrl = "coal.csv";
    const csvPromise = papaPromise(csvUrl);
    var theDom = document.getElementById('chart_one');
    var myChart = echarts.init(theDom);
    var option;
    var theData = [[],[],[]]
    csvPromise.then(function (results) {
        results.data.forEach((row) => {
          theData[0].push(row.time)
          theData[1].push(row.coal)
          theData[2].push(row.lignite)
        })

option = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF'],
    title: {
        text: 'Energy balance values: Coal, lignite (1990-2019)',
        subtext: 'European Union - 27 countries'
    },
    // legend: {
    //     y: 'bottom',
    //     margin: 5,
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {title: ''},
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: theData[0]
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Coal',
            type: 'line',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(128, 255, 165)'
                }, {
                    offset: 1,
                    color: 'rgba(1, 191, 236)'
                }])
            },
            emphasis: {
                focus: 'series'
            },animationDelay: function (idx) {
                return idx * 10;
            },
            
            data: theData[1]
        },
        {
            name: 'Lignite',
            type: 'line',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 221, 255)'
                }, {
                    offset: 1,
                    color: 'rgba(77, 119, 255)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            animationDelay: function (idx) {
                return idx * 10+200;
            },
            data: theData[2]
        },
    ],
};

myChart.setOption(option);
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
