const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const { Users } = require("../models");
const  {sign, } = require('jsonwebtoken');
const {validatedToken} = require('../middlewares/AuthMiddleware')
router.post("/login", async (req, res) =>{
  let details = {
    username: req.body.username,
    user_password: req.body.user_password
  }

  const user = await Users.findOne({where:{username: details.username }});

  if(!user){
    res.json({error: "User không tồn tại"});
  }
  bcrypt.compare(details.user_password, user.user_password).then((matched) => {
    if (!matched) {
      res.json({ error: "Sai mật khẩu hoặc tên người dùng" });
    }

    const accessToken = sign(
      { username: user.username, id: user.id },
      "importantSecrect"
    );
    res.json({token: accessToken, username: user.username, id: user.id});
  });
  
});


router.post("/register", async (req, res) => {
  let details = {
    name: req.body.name,
    username: req.body.username,
    role: req.body.role,
    email: req.body.email,
    user_password: req.body.user_password,
  };

  bcrypt.hash(details.user_password, 10).then((hashed)=>{
    Users.create({
      name: details.name,
      username: details.username,
      role: details.role,
      email: details.email,
      user_password: hashed,
    }).then(console.log("Thêm Thành Công!"));
  })

  res.json("success!");
});


router.post("/getAuth",validatedToken, (req, res, next)=>{
  res.json(req.user);

})
module.exports = router;
