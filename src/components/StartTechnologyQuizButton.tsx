import '../styles/startQuizButton.scss'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import { QuizContext } from '../context/TechContext';

export function StartTechnologyQuizButton(){
  const [quizState, dispatch]:any = useContext(QuizContext);
  const [ quizCategory, setQuizCategory ] = useState('sport' || 'technology')

  return(
    <div className="start-button">
      <Link to="/technology-quiz">
        <button onClick={() =>  dispatch({type: "TECH_QUIZ"})}>Get Started</button>
      </Link>
    </div>
  )
}