const rl = "jtf_allocation.csv";
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
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
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
