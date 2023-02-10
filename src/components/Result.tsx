import result from '../assets/result.png'
import '../styles/result.scss'

export function Result(){
  return(
    <div className='result'>
      <img src={result} alt="" />
      <div className="infos">
        <h3>Good Result!</h3>
        <p>Share your achievement
          with your friend</p>
      </div>
    </div>
  )
}