import leftArrow from '../assets/left-arrow.svg'
import menu from '../assets/menu.svg'
import { Link } from 'react-router-dom'
import '../styles/detailHeader.scss'

export function DetailHeader(){
  return(
    <header>
      <div className="detail-header">
        <Link to="/"><img src={leftArrow} alt="" /></Link>
        <h4>Detail Quiz</h4>
      </div>

      <div className="menu">
        <img src={menu} alt="" />
      </div>
    </header>
  )
}