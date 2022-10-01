// 导入 mysql 模块
const mysql2 =require('mysql2')
// 设置链接信息
const connection = mysql2.createConnection({
  host:'localhost',
  user:'root',
  password:'123',
  port:'3306',
  database:'mesone'
});
module.exports=connection
