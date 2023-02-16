import '../styles/startQuizButton.scss'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import { QuizContext } from '../context/TechContext';

export function StartMusicQuizButton(){
  const [, dispatch] = useContext(QuizContext);

  return(
    <div className="start-button">
      <Link to="/music-quiz">
        <button onClick={() =>  dispatch({type: "MUSIC_QUIZ"})}>Get Started</button>
      </Link>
    </div>
  )
}