import React from "react";

function QuestionList({mappedQuestions}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{mappedQuestions}</ul>
    </section>
  );
}

export default QuestionList;
