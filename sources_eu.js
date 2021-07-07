    const url_nrg = "GIC.csv";
    const csvPrm = papaPromise(url_nrg);
    var theDom = document.getElementById('chart_two');
    var theChart = echarts.init(theDom);
    var option;
    var theData2 =[[],[]]
    csvPrm.then(function (these) {
        these.data.forEach((col) => {
            theData2[0].push(col.Year)
            theData2[1].push(col.Spending)
        })

console.log(theData2)
option = {
    title: {
        text: "Global renewable energy capacity spending",
        subtext:"calculated in USD"
    },
    xAxis: {
        type: 'category',
        data: theData2[0]
    },
    tooltip: {
        trigger: 'axis',
        formatter: '<b>{b0}: {c0} </b> billion (USD)',
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
    yAxis: {
        type: 'value'
    },
    series: [{
        data: theData2[1],
        type: 'line',
        smooth: true
    }]
};

theChart.setOption(option)
window.onresize = function() {
    theChart.resize();
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
