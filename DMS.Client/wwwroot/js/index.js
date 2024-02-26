const JS_FILE_PATH = [
    'lib/echarts/echarts.min.js',
    'lib/bootstrap/js/bootstrap.min.js',
    'js/EChartJsCore.js',
]

const CSS_FILE_PATH = [
    "css/fonts.css",
    "css/base.css",
    "DMS.Client.styles.css",
    "lib/bootstrap/css/bootstrap.min.css",
    "lib/bi/font/bootstrap-icons.min.css",
    "css/blazor-loading.css",
]

CSS_FILE_PATH.forEach(file => document.write(`<link rel="stylesheet" href="${file}" />`))
JS_FILE_PATH.forEach(file => document.write(`<script src="${file}"></script>`))