import { QuizHeader } from "../components/QuizHeader";
import { TechnologyProgressBar } from "../components/TechnologyProgressBar";
import { TechnologyQuestion } from "../components/TechnologyQuestion";

export function MusicQuiz(){
  return(
    <>
      <QuizHeader quiz="Music" />
      <TechnologyProgressBar />
      <TechnologyQuestion />
    </>
  )
}