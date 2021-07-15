const rl = "data/jtf_allocation.csv";
const prim = papaPromise(rl);
var dm = document.getElementById('c_chart');
var ch = echarts.init(dm);
var option;
var dt =[[],[],[],[]]
prim.then(function (ts) {
    ts.data.forEach((cl) => {
        dt[0].push(cl.member_state)
        dt[1].push(cl.coal_employment)
        dt[2].push(cl.jtf_eur)
    })


    option = {
        title: {
            subtext: 'JTF resource allocation in countries with in mining of coal and lignite (100%)',
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: dt[0]
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
        xAxis: {
            type: 'category',
            data: dt[0]
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: 'EUR million',
                type: 'bar',
                data: dt[2],
                itemStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 112, 255)'
                    }, {
                        offset: 1,
                        color: 'rgba(255, 255, 255)'

                    }])
                },
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
