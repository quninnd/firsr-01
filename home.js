const express = require('express');
//创建home路由
const home = express.Router()

home.get('/home', (req, res, next) => {
         res.send('这是home的界面')
    

});
module.exports = home;