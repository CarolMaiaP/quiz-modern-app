import '../styles/startQuizButton.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { QuizContext } from '../context/TechContext';

export function StartSportQuizButton(){
  const [, dispatch] = useContext(QuizContext);

  return(
    <div className="start-button">
      <Link to="/sport-quiz">
        <button onClick={() =>  dispatch({type: "SPORT_QUIZ"})}>Get Started</button>
      </Link>
    </div>
  )
}