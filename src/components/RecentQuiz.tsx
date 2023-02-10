import read from '../assets/read.png'
import speak from '../assets/speak.png'
import '../styles/recentQuiz.scss'

export function RecentQuiz(){
  return(
    <div className='recent-quiz'>
      <h3>Recent Quiz</h3>
      <div className="completed-quiz">
        <div className="read">
          <img src={read} alt="" />
          <h3>Reading</h3>
          <p>You completed 65%</p>
          <div className="read-progress-bar">
            <div className="read-completed">

            </div>
          </div>
        </div>
        <div className="speak">
          <img src={speak} alt="" />
          <h3>Speaking</h3>
          <p>You completed 85%</p>
          <div className="speak-progress-bar">
            <div className="speak-completed">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}