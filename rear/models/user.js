const md5 = require('md5-node');
const connection = require('../utils/mysqlDB')
//  电话号码登录验证
const phoneLogin = (phone, pas) => {
  console.log(pas);
  pas = md5(md5(pas));
  console.log('md5===' + pas);
  let sql = 'select * from sys_user where phonenumber=? and password=?';
  connection.query(sql, [phone, pas], (err, results) => {
    if (err) return err.message;
    console.log(results);
    return results;
  });
}
//  用户名登录验证
const userLogin = (name, pas) => {
  pas = md5(md5(pas));
  let sql = 'select * from sys_user where user_name=? and password=?';
  connection.query(sql, [name, pas], (err, data) => {
    if (err) return err.message;
    console.log(data);
    return data;
  });
}
//  全部用户查询
const userQuery = async (data) => {
  let sql = 'select * from sys_user';
  let connt = await connection.promise().query(sql);
  console.log(connt[0]);
  return connt[0]
  /* if(data.logName){
    sql ='select * from sys_user where login_name=?';
  }else if(data.phone){
    sql = 'select * from sys_user where phonenumber=?';
  }else if(data.status){
    sql = 'select * from sys_user where status=?';
  } */
  // const result={}
  // db.query(sql,(err,results)=>{
  //   if(err) return err.message;
  //   console.log('查询用户全部数据...');
  //   console.log(results);
  //   result = results[0];
  // });
  // console.log(result);
  // return result;
}
// 用户新增方法
const userAdd = async (data) => {
  data.status = data.status == true ? 0 : 1;  
  console.log('用户增加...');
  console.log(data);
  let sql = 'insert into sys_user (user_name,phonenumber,login_name,sex,dept,email,password,status) values (?,?,?,?,?,?,?,?)';
  let conn=await connection.promise().query(sql, [data.user_name, data.phonenumber, data.login_name, data.sex, data.dept, data.email, data.password, data.status]);
    sql = 'insert into sys_user_role values(?,?)';
    console.log('conn===>');
    console.log(conn[0]);
    connection.query(sql, [conn[0].insertId, '2'],(err, results) => {
      if (err) return err.message;
      return conn[0];
    });
}
// 用户修改方法
const userUpdate = (data) => {
  let sql = 'update sys_user set user_name=?, phonenumber=?,dept=?,email=?,status=?,sex=? where user_id=?';
  connection.query(sql, [data.name, data.phone, data.dept, data.email, data.status, data.sex, data.user_id], (err, results) => {
    if (err) return err.message;
    console.log('用户修改。。。');
    console.log(results);
    
  });
}
// 用户删除方法
const userDelete = (data) => {
  console.log(data);
  console.log('用户删除...');
  let sql = 'delete from sys_user where user_id=?';
  connection.query(sql, [data.delectId], (err, results) => {
    if (err) return err.message;
    console.log(results);
    return results;
  });
}
module.exports = {
  phoneLogin,
  userLogin,
  userQuery,
  userAdd,
  userUpdate,
  userDelete
}