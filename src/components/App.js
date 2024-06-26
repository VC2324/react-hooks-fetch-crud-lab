import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import QuestionItem from "./QuestionItem"

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] =useState([])
  
  // useEffect(()=>{
  //   fetch('http://localhost:4000/questions')
  //   .then(response => response.json())
  //   .then (questionsArray => setQuestions(questionsArray))
  // },[])

  const mappedQuestions = questions.map( question =>
    {return <QuestionItem key={question.id} question={question} questions={questions} setQuestions={setQuestions}/>})

  return (
    <main>
      
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm  questions={questions} setQuestions={setQuestions}/> : <QuestionList  questions={questions} setQuestions={setQuestions} mappedQuestions={mappedQuestions}/>}
   
    </main>
  );
}

export default App;
