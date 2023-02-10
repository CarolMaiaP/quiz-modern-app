import '../styles/question.scss'
import { OptionQuiz } from './OptionsQuiz'

export function Question(){
  return(
    <div className="question">
      <h3>The image below is a field image 
        used for?</h3>

      <OptionQuiz />

      <div className="actions">
        <div className="previous">
          <button>Previous</button>
        </div>

        <div className="next">
          <button>Next</button>
        </div>
      </div>
    </div>
  )
}