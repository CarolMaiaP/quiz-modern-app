import { useContext } from 'react';
import { QuizContext } from '../context/TechContext';
import '../styles/options.scss'

export function OptionsQuiz(){
  const [quizState, dispatch]:any = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion]
  const answer = currentQuestion.answer

  console.log(quizState.score)

  function handleSelectOption(option:any){
    dispatch({
      type: "CHECK_ANSWER",
      payload: {answer: currentQuestion.answer, option}
    })
  }

  return(
    <div className="options">
      {currentQuestion.options.map((option:any) => {
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