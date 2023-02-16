import { useContext, Dispatch } from 'react';
import { QuizContext } from '../context/TechContext';
import '../styles/options.scss'


export function OptionsQuiz(){
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion]
  const answer = currentQuestion.answer

  function handleSelectOption(option:string){
    dispatch({
      type: "CHECK_ANSWER",
      payload: {answer: currentQuestion.answer, option}
    })
  }

  return(
    <div className="options">
      {currentQuestion.options.map((option:string) => {
        return(
        <div className={
          `option 
            ${quizState.answerSelected && option === answer ? "correct" : ""}
            ${quizState.answerSelected && option !== answer ? "wrong" : ""}
            ${quizState.answerSelected ? "blocked" : ""}`
          } 
          key={option}>
          <input className='radio' type="radio" id={option} name='option' disabled={!quizState.answerSelected} />
          <label htmlFor={option} onClick={() => handleSelectOption(option)}>{option}</label>
        </div>
        )
      })}
    </div>
  )
}