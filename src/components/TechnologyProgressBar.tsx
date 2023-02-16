import { useContext } from 'react';
import { QuizContext } from '../context/TechContext';
import '../styles/tecnologyProgressBar.scss'

export function TechnologyProgressBar(){
  const [quizState]:any = useContext(QuizContext);
  const currentQuestion = quizState.currentQuestion
  const totalQuestions = quizState.questions.length
  const completedPercentage = currentQuestion > 0 ? Math.round((currentQuestion / totalQuestions ) * 100) : 0

  return(
    <div className="progress-bar-contain">
      <div className="tecnology-progress-bar">
        <div className="tecnology-quiz-completed" style={{width: `${completedPercentage}%`}}>

        </div>
      </div>
      <p>Completed: {completedPercentage}%</p>
    </div>
  )
}