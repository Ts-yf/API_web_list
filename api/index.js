const express = require('express');
const path = require('path'); // 新增路径模块

const app = express();

// 修正静态文件路径（使用绝对路径）
app.use(express.static(path.join(__dirname, '../htdocs'))); // 重要改动！

// 添加回退路由（支持SPA）
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../htdocs/index.html'));
});

module.exports = app;