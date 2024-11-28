const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const { ThuCung } = require('../models');

router.get("/" , async (req, res) =>{
    const listOfThuCung = await ThuCung.findAll();
    res.json(listOfThuCung);
});

router.post('/', async (req,res) =>{
    let details = {
        name: req.body.name,
        description: req.body.description
    };
    await ThuCung.create({name: details.name , description: details.description}).then(console.log("Saved successfully!"));
    res.json(details);
});

module.exports = router;