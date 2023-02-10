import '../styles/options.scss'

export function OptionQuiz(){
  return(
    <div className="options">
      <div className="option">
        <input className='radio' type="radio" id="football" name='option' />
        <label htmlFor="football">Football</label>
      </div>
      <div className="option">
        <input className='radio' type="radio" id="basketball" name='option' />
        <label htmlFor="basketball">Basketball</label>
      </div>
      <div className="option">
        <input className='radio' type="radio" id="volleyball" name='option' />
        <label htmlFor="volleyball">Volleyball</label>
      </div>
      <div className="option">
        <input className='radio' type="radio" id="shuttlecock" name='option' />
        <label htmlFor="shuttlecock">Shuttlecock</label>
      </div>
    </div>
  )
}