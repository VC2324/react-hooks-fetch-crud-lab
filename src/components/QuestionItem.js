import React from "react";

function QuestionItem({ question, questions, setQuestions}) {
  const { id, prompt, answers, correctIndex } = question;
console.log(question)
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
/// make a varble that fileters questions deleteing the key in that array
//write a turnary if deleted id equals to id in array it removes the id form the array

//what is the deleted .id 
  // const deletedQuestion = questions.filter((questions)=> questions.id !== question.id)

  // console.log(deletedQuestion)

  function handleClick(){
    const fileterdQuestions = questions.filter((item)=> item.id !== question.id)

    fetch(`http://localhost:4000/questions/${question.id}`,{
      method: "DELETE",
    })
    .then (() =>{ setQuestions(fileterdQuestions)} )

  }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
