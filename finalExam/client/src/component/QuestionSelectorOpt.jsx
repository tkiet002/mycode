export default function QuestionSelectorOpt({ questionNumber }) {
  
  return (
    <div key={questionNumber} className="grid justify-center border-2 border-black w-[80px] min-w-[80px] h-[50px] justify-items-center m-2 rounded-md">
      <button>{questionNumber}</button>
    </div>
  );
}
