import React from "react";
import QuestionOption from "./QuestionOption";
import QuestionAsk from "./QuestionAsk";
import DeleteButton from "./DeleteButton";
import EditQuestionButton from "./EditQuestionButton";
export default function Question({ index, ques, optA, optB, optC, optD , in_edit_mode, question_id,choice_id_a,choice_id_b,choice_id_c,choice_id_d}) {
  
  return (
    <div className=" bg-slate-400 max-w-7xl border-black rounded-xl p-4">
      <p>Câu hỏi {index}</p>
      <QuestionAsk questionContent={ques} />

      <div className="grid grid-cols-2">
        <QuestionOption opt={`A${index}`} content={optA} choice_id={choice_id_a}/>
        <QuestionOption opt={`B${index}`} content={optB} choice_id={choice_id_b}/>
        <QuestionOption opt={`C${index}`} content={optC} choice_id={choice_id_c}/>
        <QuestionOption opt={`D${index}`} content={optD} choice_id={choice_id_d}/>
      </div>
      {in_edit_mode ? (
        <>
          <DeleteButton question_id = {question_id}/>
          <EditQuestionButton question_id = {question_id}/>
        </>
      ) : (
        <> </>
      )}
    </div>
  );
}
