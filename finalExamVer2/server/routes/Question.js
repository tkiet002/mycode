const express = require("express");
const router = express.Router();
const {Sequelize} = require("sequelize");
const initModels = require("../models/init-models");
const { sequelize } = require("../models");
const {dvalidatedToken} = require("../middlewares/AuthMiddlewareDelete");
const {sql} = require("@sequelize/core")
var models = initModels(sequelize);
router.get("/", async (req, res) => {
  const listOfQuestion = await models.Question.findAll({
    
    include: [
      {
        model: models.Question_Choice,
        attributes: ["choice_id", "choice_text","is_right"],
        as: "Question_Choices"
      },
    ],
  });

  res.json(listOfQuestion);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const listOfQuestion = await models.Question.findAll({
    where: {lesson_id: id},
    include: [
      {
        model: models.Question_Choice,
        attributes: ["choice_id", "choice_text", "is_right"],
        as: "Question_Choices"
      },
    ],
  });

  res.json(listOfQuestion);
});


// router.post('/', async (req,res) =>{
//     let details = {
//         name: req.body.name,
//         description: req.body.description
//     };
//     await ThuCung.create({name: details.name , description: details.description}).then(console.log("Saved successfully!"));
//     res.json(details);
// });

router.post("/", async (req, res) => {
  let details = req.body;
  let lastInsert = 0;

  console.log(details)
  let createdQuestion = await models.Question.create({
    question_text: details.question_text,
    created_by: req.body.created_by,
    lesson_id: details.lesson_id,
    explaination: details.explanation,
  }).then((result) =>{
    lastInsert = result.question_id;
  });
  
  

  const test = await models.Question_Choice.create({
    question_id: lastInsert,
    choice_text: details.optA,
    is_right: details.OptAIsRight
  });
  console.log(details.OptAIsRight);
  await models.Question_Choice.create({
    question_id: lastInsert,
    choice_text: details.optB,
    is_right: details.OptBIsRight
  });
  await models.Question_Choice.create({
    question_id: lastInsert,
    choice_text: details.optC,
    is_right: details.OptCIsRight
  })
  await models.Question_Choice.create({
    question_id: lastInsert,
    choice_text: details.optD,
    is_right: details.OptDIsRight
  })
  res.json(test);
});

router.delete( "/api/delete/:question_id" ,dvalidatedToken, async (req, res)=>{
  let question_id = req.params.question_id;
  await models.Question.destroy({where: {question_id: question_id}})
  res.json(question_id);
})


module.exports = router;
