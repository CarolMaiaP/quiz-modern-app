import { QuizHeader } from "../components/QuizHeader";
import { TechnologyProgressBar } from "../components/TechnologyProgressBar";
import { TechnologyQuestion } from "../components/TechnologyQuestion";

export function SportQuiz({quizType}:any){
  return(
    <>
      <QuizHeader quiz="Sport" />
      <TechnologyProgressBar />
      <TechnologyQuestion />
    </>
  )
}