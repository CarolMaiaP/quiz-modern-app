import computer from '../assets/computer.png'
import star from '../assets/star.svg'
import '../styles/detailTechnology.scss'

export function DetailTechnology(){
  return(
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
  )
}