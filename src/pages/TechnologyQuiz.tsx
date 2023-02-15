import { TechnologyQuestion } from "../components/TechnologyQuestion";
import { QuizHeader } from "../components/QuizHeader";
import { TechnologyProgressBar } from "../components/TechnologyProgressBar";

export function TecnologyQuiz(){
  return(
    <>
      <QuizHeader quiz="Technology" />
      <TechnologyProgressBar />
      <TechnologyQuestion />
    </>
  )
}