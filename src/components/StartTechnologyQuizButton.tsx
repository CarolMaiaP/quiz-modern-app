import '../styles/startQuizButton.scss'
import { Link } from 'react-router-dom'

export function StartTechnologyQuizButton(){
  return(
    <div className="start-button">
      <Link to="/technology-quiz">
        <button>Get Started</button>
      </Link>
    </div>
  )
}