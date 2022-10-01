var express = require('express');
const {userAdd,userUpdate,userQuery, userDelete}=require('../models/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 监听用户增加路由
router.post('/userAdd',async (request,response)=>{
  const index=await userAdd(request.body);
  // 大于 index 大于 1 增加成功！否则失败！
  console.log(index);
  response.send(index);
});
// 监听用户修改路由
router.post('/userUpdate',(request,response)=>{
  const index=userUpdate(request.body);
  response.send(index);
});
// 监听用户查询路由
router.post('/userQuery',async(request,response)=>{
  console.log('用户查询了');
  const index=await userQuery(request.body);
  console.log(index);
  response.send(index);
});
// 监听用户删除路由
router.post('/userDelete',(request,response)=>{
  const index =userDelete(request.body);
  response.send(index);
});
module.exports = router;
