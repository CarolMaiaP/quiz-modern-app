import '../styles/detailRules.scss'

export function DetailRules(){
  return(
    <div className="detail-rules">
      <h3>Please read the text below carefully
        so you can understand it</h3>

    <div className="rules-list">
      <ul>
        <li><p>10 point awarded for a correct answer and no
          marks for a incorrect answer</p></li>
        <li><p>Tap on options to select the correct answer</p></li>
        <li><p>Click submit if you are sure you want to
          complete all the quizzes</p></li>
      </ul>
    </div>
    </div>
  )
}