const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");
const app = express();
const port = 5000;
app.use(express.json());
const sequelize = new Sequelize("test", "root", "namromss4//123", {
  host: "localhost",
  dialect: "mysql",
});



const db = require("./models");

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });


 const thuCungRouter = require('./routes/ThuCung');
 app.use("/thucung", thuCungRouter);

 const hoiNhomRounter = require('./routes/HoiNhom');
 app.use("/hoinhom", hoiNhomRounter);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server started successfully on ${port}`);
  });
});

