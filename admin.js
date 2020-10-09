const express = require('express');
//创建admin路由
const admin = express.Router()

admin.get('/admin', (req, res) => {
    res.send('这是admin的界面')
})

module.exports = admin;