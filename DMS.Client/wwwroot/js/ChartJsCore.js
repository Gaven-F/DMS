window.CHART = {
    INSTANCES: [],
    RESIZE_OBSERVER: new ResizeObserver((_entries) => {
        CHART.INSTANCES.forEach(({ chart }) => {
            chart.resize()
        })
    }),
    Initialized: (domId, option) => {
        const chart = echarts.init(document.getElementById(`${domId}`))
        chart.setOption(JSON.parse(option))

        CHART.INSTANCES.push({ domId, chart })
        CHART.RESIZE_OBSERVER.observe(chart.getDom())
    },
    Dispose: (domId) => {
        CHART.RESIZE_OBSERVER.disconnect(CHART.INSTANCES.find(it => it.domId === domId).chart.getDom())
        CHART.INSTANCES = CHART.INSTANCES.filter(it => it.domId != domId)
    }
}
