const express = require("express");
const { response } = require("../app");
const { userLogin, phoneLogin } = require("../models/user");
const router = express.Router();

// 登录验证
router.post("/", (request, response) => {
  console.log('登录'+request.body.name);
  const { type, save, phone, name, pas } = request.body;
  if (type === "phone") {
    const res = phoneLogin(phone, pas);
    return response.send('ok');
  }
  const res = userLogin(name, pas);
  // response(res);
  response.send(res);
});
module.exports = router;
