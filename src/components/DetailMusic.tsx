import star from '../assets/star.svg'
import music from '../assets/music.png'
import '../styles/detailMusic.scss'

export function DetailMusic(){
  return(
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
  )
}