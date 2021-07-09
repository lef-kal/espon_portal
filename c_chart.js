const rl = "apache_test.csv";
const prim = papaPromise(rl);
var dm = document.getElementById('c_chart');
var ch = echarts.init(dm);
var option;
var dt =[[],[],[],[]]
prim.then(function (ts) {
    ts.data.forEach((cl) => {
        dt[0].push(cl.region)
        dt[1].push(cl.coal_type)
        dt[2].push(cl.jobs)
    })

console.log(dt)

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // Use axis to trigger tooltip
            type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },
    legend: {
        data: dt[0]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: dt[1]
    },
    series: [
        {
            name: 'Direct',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: dt[2]
        }
    ]
};

ch.setOption(option)
window.onresize = function() {
ch.resize();
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
