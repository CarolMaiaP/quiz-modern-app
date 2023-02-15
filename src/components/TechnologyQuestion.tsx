import { useContext, useState } from 'react'
import { QuizContext } from '../context/TechContext'
import '../styles/question.scss'
import { OptionsQuiz } from './OptionsQuiz'
import { QuizOver } from './QuizOver';

export function TechnologyQuestion(){
  const [quizState, dispatch]:any = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion]
  
  return(
    <>
      {!currentQuestion ?
        <QuizOver />
      :
        <div className="question">
          <h3>{currentQuestion.question}</h3>

          <OptionsQuiz />

          <div className="actions">
            {quizState.currentQuestion > 0 && 
            <div className="previous">
              <button onClick={() => dispatch({ type: "PREVIOUS_QUESTION" })}>Previous</button>
            </div>
            }
            

            {quizState.answerSelected && 
              <div className="next">
                <button onClick={() => dispatch({ type: "NEXT_QUESTION" })}>Next</button>
              </div>
            }
            
          </div>
        </div> 
      }
    </>

    
  )
}