import '../styles/startQuizButton.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

export function StartTechnologyQuizButton(){
  const [quizState, dispatch]:any = useContext(QuizContext);

  return(
    <div className="start-button">
      <Link to="/technology-quiz">
        <button onClick={() =>  dispatch({type: "CHANGE_STATE"})}>Get Started</button>
      </Link>
    </div>
  )
}