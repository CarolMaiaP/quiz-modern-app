import '../styles/startQuizButton.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { QuizContext } from '../context/TechContext';

export function StartSportQuizButton(){
  const [quizState, dispatch]:any = useContext(QuizContext);

  function handleStartSportQuiz(){
    console.log("setQuestions")
  }

  return(
    <div className="start-button">
      <Link to="/sport-quiz">
        <button onClick={handleStartSportQuiz}>Get Started</button>
      </Link>
    </div>
  )
}