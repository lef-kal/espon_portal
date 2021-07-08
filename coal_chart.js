    const csvUrl = "europe_electricity_sources.csv";
    const csvPromise = papaPromise(csvUrl);
    var theDom = document.getElementById('chart_one');
    var myChart = echarts.init(theDom);
    var option;
    var theData = [[],[],[],[],[],[]]
    csvPromise.then(function (results) {
        results.data.forEach((row) => {
          theData[0].push(row.Year)
          theData[1].push(row.Coal)
          theData[2].push(row.Renewables)
          theData[3].push(row.Solar)
          theData[4].push(row.Hydro)
          theData[5].push(row.Wind)

        })

option = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF'],
    // title: {
    //     text: 'Electricity production by sector (TWh)',
    //     subtext: 'Europe, geographical boundaries'
    // },
    legend: {
        y: 'top',
        margin: 5,
    },
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
            stack: '总量',

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
            name: 'Renewables',
            type: 'line',
            stack: '总量',

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
        {
            name: 'Solar',
            type: 'line',
            stack: '总量',

            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 21, 255)'
                }, {
                    offset: 1,
                    color: 'rgba(77, 19, 255)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            animationDelay: function (idx) {
                return idx * 10+200;
            },
            data: theData[3]
        },
        {
            name: 'Hydro',
            type: 'line',
            stack: '总量',

            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 112, 255)'
                }, {
                    offset: 1,
                    color: 'rgba(99, 10, 111)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            animationDelay: function (idx) {
                return idx * 10+200;
            },
            data: theData[4]
        },
        {
            name: 'Wind',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(12, 23, 255)'
                }, {
                    offset: 1,
                    color: 'rgba(3, 4, 124)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            animationDelay: function (idx) {
                return idx * 10+120;
            },
            data: theData[5]
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
