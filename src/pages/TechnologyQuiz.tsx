import { TechnologyQuestion } from "../components/TechnologyQuestion";
import { QuizTechnologyHeader } from "../components/QuizTechnologyHeader";
import { TechnologyProgressBar } from "../components/TechnologyProgressBar";

export function TecnologyQuiz(){
  return(
    <>
      <QuizTechnologyHeader />
      <TechnologyProgressBar />
      <TechnologyQuestion />
    </>
  )
}