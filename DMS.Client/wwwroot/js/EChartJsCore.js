
let CHART_INSTANCES = []

const CHART_RESIZE_OBSERVER = new ResizeObserver((_entries) => {
    CHART_INSTANCES.forEach(({ chart }) => {
        chart.resize()
    })
})

window.EChartInitialized = (domId, option) => {
    const chart = echarts.init(document.getElementById(`${domId}`))
    chart.setOption(JSON.parse(option))

    CHART_INSTANCES.push({ domId, chart })
    CHART_RESIZE_OBSERVER.observe(chart.getDom())
}

window.EChartDispose = (domId) => {
    CHART_RESIZE_OBSERVER.disconnect(CHART_INSTANCES.find(it => it.domId === domId).chart.getDom())
    CHART_INSTANCES = CHART_INSTANCES.filter(it =>  it.domId != domId)
}