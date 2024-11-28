const express = require('express');
const { HoiNhom } = require('../models');

const router  = express.Router();

router.get("/", async (req, res)=>{
    const listOfHoiNhom = await HoiNhom.findAll({
        attributes:['id','name']
    });
    res.json(listOfHoiNhom);
});

router.post("/", async (req,res)=>{
    const hoiNhom = req.body.name;
    await HoiNhom.create({name: req.body.name},{field: ['name'], timestamp: false});
    res.json(hoiNhom);
});

module.exports = router;