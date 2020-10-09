const express = require('express');
const app = express();
// 导入admin和home模块
const admin = require('./admin.js')
const home = require('./home.js')


app.use('/index', home);
app.use('/index', admin);

app.get('/first', (req, res) => {
    res.send(` <li id="li">狗剩子</li>`)
})

app.listen(3000);
console.log('服务器启动成功');