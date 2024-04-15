import React,{ useEffect } from "react";

function QuestionList({mappedQuestions, questions, setQuestions}) {

  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then(response => response.json())
    .then (questionsArray => setQuestions(questionsArray))
  },[])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{mappedQuestions}</ul>
    </section>
  );
}

export default QuestionList;
