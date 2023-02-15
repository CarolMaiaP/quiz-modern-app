import leftArrow from '../assets/left-arrow.svg'
import { Link } from 'react-router-dom'
import '../styles/quizHeader.scss'

interface quizHeaderProps{
  quiz: string;
}

export function QuizHeader(props:quizHeaderProps){
  return(
    <header>
      <div className="technology-header">
      <Link to="/"><img src={leftArrow} alt="" /></Link>
        <h4>{props.quiz}</h4>
      </div>
      <div className="time">
        
      </div>
    </header>
  )
}