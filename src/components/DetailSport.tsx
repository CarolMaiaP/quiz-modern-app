import star from '../assets/star.svg'
import sport from '../assets/sport.png'
import '../styles/detailSport.scss'

export function DetailSport(){
  return(
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
  )
}