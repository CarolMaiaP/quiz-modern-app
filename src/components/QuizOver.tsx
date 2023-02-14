import { useContext } from "react";
import { QuizContext } from "../context/TechContext";
import '../styles/quizOver.scss'

export function QuizOver(){
  const [quizState, dispatch]:any = useContext(QuizContext);

  return(
    <div className="quiz-over">
      <h1>Quiz over</h1>
      <h4>Pontuação: {quizState.score} / {quizState.questions.length}</h4>
    </div>
  )
}