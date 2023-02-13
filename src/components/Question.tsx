import { useContext, useState } from 'react'
import { QuizContext } from '../context/QuizContext'
import '../styles/question.scss'
import { OptionQuiz } from './OptionsQuiz'
import { QuizOver } from './QuizOver';

export function Question(){
  const [quizState, dispatch]:any = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion]


  return(
    <>
      {!currentQuestion ?
        <QuizOver />
      :
        <div className="question">
          <p>{quizState.currentQuestion + 1} de {quizState.questions.length}</p>
          <h3>{currentQuestion.question}</h3>

          <OptionQuiz />

          <div className="actions">
            <div className="previous">
              <button>Previous</button>
            </div>

            <div className="next">
              <button onClick={() => dispatch({ type: "NEXT_QUESTION" })}>Next</button>
            </div>
          </div>
        </div> 
      }
    </>

    
  )
}