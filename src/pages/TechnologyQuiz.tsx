import { Question } from "../components/Question";
import { QuizTechnologyHeader } from "../components/QuizTechnologyHeader";
import { TechnologyProgressBar } from "../components/TechnologyProgressBar";

export function TecnologyQuiz(){
  return(
    <>
      <QuizTechnologyHeader />
      <TechnologyProgressBar />
      <Question />
    </>
  )
}