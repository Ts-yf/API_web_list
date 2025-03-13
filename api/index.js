const express = require('express');
const app = express();

// 设置静态文件目录
app.use(express.static('htdocs'));

// 导出Vercel Serverless处理函数
module.exports = app;