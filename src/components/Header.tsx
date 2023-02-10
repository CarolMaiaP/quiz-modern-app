import user from '../assets/user.png'
import bell from '../assets/bell.svg'
import '../styles/header.scss'

export function Header(){
  return(
    <header>
      <div className="user">
        <img src={user} alt="" />
        <h3><span>Hello,</span> Jessica</h3>
      </div>
      <button><img src={bell} /></button>
    </header>
  )
}