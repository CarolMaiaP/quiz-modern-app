import leftArrow from '../assets/left-arrow.svg'
import { Link } from 'react-router-dom'
import '../styles/quizTechnologyHeader.scss'

export function QuizTechnologyHeader(){
  return(
    <header>
      <div className="technology-header">
      <Link to="/"><img src={leftArrow} alt="" /></Link>
        <h4>Technology</h4>
      </div>
      <div className="time">
        
      </div>
    </header>
  )
}