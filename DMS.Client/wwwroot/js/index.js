const JS_FILE_PATH = [
    'lib/echarts/echarts.min.js',
    'lib/bootstrap/js/bootstrap.min.js',
    'js/ChartJsCore.min.js',
]

const CSS_FILE_PATH = [
    "DMS.Client.styles.css",
    "css/app.min.css",
    "lib/bi/font/bootstrap-icons.min.css",
    "lib/bootstrap/css/bootstrap.min.css",
]

CSS_FILE_PATH.forEach(file => document.write(`<link rel="stylesheet" href="${file}" />`))
JS_FILE_PATH.forEach(file => document.write(`<script src="${file}"></script>`))

