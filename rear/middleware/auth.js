const express = require("express");
const { response } = require("../app");
const { userLogin, phoneLogin } = require("../models/user");
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const router = express.Router();

const secretKey = "itheima No1 ^_^";

// 登录验证
router.post("/", (request, response) => {
  console.log(request.body);
  const { type, save, phone, name, pas } = request.body;
  if (type === "phone") {
    const res = phoneLogin(phone, pas);
    console.log(res);
    // const tokenStr = jwt.sign({userName:res.user},secretKey,{expiresIn:'120s'});
    return response.send('ok');
  }
  const res = userLogin(name, pas);
  // response(res);
  response.send(res);
});
module.exports = router;
