import { QuizHeader } from "../components/QuizHeader";
import { TechnologyProgressBar } from "../components/TechnologyProgressBar";
import { TechnologyQuestion } from "../components/TechnologyQuestion";

export function SportQuiz(){
  return(
    <>
      <QuizHeader quiz="Sport" />
      <TechnologyProgressBar />
      <TechnologyQuestion />
    </>
  )
}