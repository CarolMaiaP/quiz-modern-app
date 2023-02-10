import computer from '../assets/computer.png'
import star from '../assets/star.svg'
import sport from '../assets/sport.png'
import music from '../assets/music.png'
import { Link } from 'react-router-dom'
import '../styles/popularQuiz.scss'

export function PopularQuiz(){
  return(
    <div className="popular-quiz">
      <h3>Popular Quiz</h3>
      <Link to="/detail-technology">
        <div className="quiz">
          <div className='technology'>
            <img src={computer} alt="" />
          </div>
          <div className='quiz-info'>
            <h3>Technology</h3>
            <p>10 Questions</p>
          </div>
          <div className="score">
            <img src={star} alt="" />
            <p>4.8</p>
          </div>
        </div>
      </Link>

      <Link to="/detail-sport">
        <div className="quiz">
          <div className='sport'>
            <img src={sport} alt="" />
          </div>
          <div className='quiz-info'>
            <h3>Sport</h3>
            <p>10 Questions</p>
          </div>
          <div className="score">
            <img src={star} alt="" />
            <p>4.8</p>
          </div>
        </div>
      </Link>

      <Link to="/detail">
        <div className="quiz">
          <div className='music'>
            <img src={music} alt="" />
          </div>
          <div className='quiz-info'>
            <h3>Music</h3>
            <p>10 Questions</p>
          </div>
          <div className="score">
            <img src={star} alt="" />
            <p>4.8</p>
          </div>
        </div>
      </Link>
    </div>
  )
}