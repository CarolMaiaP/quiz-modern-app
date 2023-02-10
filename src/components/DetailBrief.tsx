import file from '../assets/file.png'
import clock from  '../assets/clock.png'
import '../styles/detailBrief.scss'

export function DetailBrief(){
  return(
    <div className="detail-brief">
      <h3>Brief explanation about this quiz</h3>
      <div>
        <div className="questions">
          <div className="image">
            <img src={file} alt="" />
          </div>
          <div className="infos">
            <h4>10 Question</h4>
            <p>10 point for a correct answer</p>
          </div>
        </div>
        <div className="duration">
          <div className="image">
            <img src={clock} alt="" />
          </div>
          <div className="infos">
            <h4>1 hour 20 min</h4>
            <p>Total duration of the quiz</p>
          </div>
        </div>
      </div>
    </div>
  )
}