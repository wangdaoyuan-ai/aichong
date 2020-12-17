// 加载Express模块
const express = require('express');
// 加载CORS模块
const cors = require('cors');
const md5=require('md5');

// 加载MySQL模块
const mysql = require('mysql');
const bodyParser=require('body-parser')


// 创建WEB服务器
const server = express();

// 为所有的HTTP请求使用CORS模块
server.use(cors({
  origin: ['http://127.0.0.1:8080', 'http://localhost:8080']
}));
server.use(bodyParser.urlencoded({
    extended:false
}))

//创建MySQL连接池
const pool = mysql.createPool({
  // 数据库服务器的地址
  host: '127.0.0.1',
  // 数据库服务器的端口号
  port: 3306,
  // 数据库用户的用户名
  user: 'root',
  // 数据库用户的密码
  password:'',
  // 数据库名称
  database:'acw',
  // 最大连接数
  connectionLimit: 15
});
//商品详情接口
server.get('/details',(req,res)=>{
  let id=req.query.lid;
  let sql='select did,subject,taobao,jd,price,image from acw_details INNER JOIN acw_image on did=details_did where did=?'
  pool.query(sql,[id],(error,result)=>{
    if(error) throw error
    res.send({code:200,message:'查询成功',results:result[0]});
  })
})
// 指定 WEB服务器监听的端口
server.listen(3000);
//种类接口
server.get('/category',(req,res)=>{
  let sql='SELECT category_name,category_image,lid FROM acw_category'
  pool.query(sql,(error,results)=>{
    if(error) throw error;
    res.send({code:200,message:'查询成功',results:results})
  })
})
//首页列表接口
server.get('/indexlist',(req,res)=>{
  let sql='select did,subject,taobao,jd,price,avatar from acw_details'
  pool.query(sql,(error,results)=>{
    if(error) throw error;
    res.send({code:200,message:'查询成功',results:results})
  })
})
//购物车接口
server.get('/oredr',(req,res)=>{
  let id=req.query.id;
  let sql='select id,subject,avatar,price,number from acw_cart where user_id=?'
  pool.query(sql,[id],(error,results)=>{
    if(error) throw error;
    res.send({results:results})
  })
})