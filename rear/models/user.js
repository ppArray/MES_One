 const db=require('../utils/mysqlDB')
//  电话号码登录验证
 const phoneLogin= (phone,pas)=>{
  let sql ='select * from sys_user where phonenumber=? and password=?';
  db.query(sql,[phone,pas],(err,results)=>{
    if(err) return err.message;
    console.log('电话号码：'+results);
    return results;
  });
 }
//  用户名登录验证
 const userLogin =(name,pas)=>{
  let sql ='select * from sys_user where user_name=? and password=?';
  db.query(sql,[name,pas],(err,data)=>{
    if(err) return err.message;
    console.log(data);
    return data;
  });
 }
//  全部用户查询
const userQuery =(data)=>{
  let sql ='select * from sys_user';
  if(data.logName){
    sql ='select * from sys_user where login_name=?';
  }else if(data.phone){
    sql = 'select * from sys_user where phonenumber=?';
  }else if(data.status){
    sql = 'select * from sys_user where status=?';
  }
  db.query(sql,(err,results)=>{
    if(err) return err.message;
    return results;
  });
}
// 用户新增方法
const userAdd =(data)=>{
  let sql='insert into sys_user (user_name,phonenumber,login_name,sex,dept,email,password,status) values (?,?,?,?,?,?,?,?)';
  db.query(sql,[data.name,data.phone,data.logName,data.sex,data.dept,data.email,data.pswd,data.status],(err,results)=>{
    if(err) return err.message;
    sql='insert into sys_user_role values(?,?)';
    db.query(sql,[,'2'],(err,results)=>{
      if(err) return err.message;
      return results;
    });
  });
}
// 用户修改方法
const userUpdate=(data)=>{
  let sql = 'update sys_user set user_name=?, phonenumber=?,dept=?,email=?,status=?,sex=? where login_name=?';
  db.query(sql,[data.name,data.phone,data.dept,data.email,data.status,data.sex,data.logName],(err,results)=>{
    if(err) return err.message;
    return results;
  });
}
// 用户删除方法
const userDelete=(data)=>{
  let sql ='delete from sys_user where user_id=?';
  db.query(sql,[data.userId],(err,results)=>{
    if(err) return err.message;
    return results;
  });
}
 module.exports={
  phoneLogin,
  userLogin,
  userQuery,
  userAdd,
  userUpdate,
  userDelete
 }