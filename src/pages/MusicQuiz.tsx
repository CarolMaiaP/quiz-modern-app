import { QuizHeader } from "../components/QuizHeader";
import { TechnologyProgressBar } from "../components/TechnologyProgressBar";
import { TechnologyQuestion } from "../components/TechnologyQuestion";

export function MusicQuiz({quizType}:any){
  return(
    <>
      <QuizHeader quiz="Music" />
      <TechnologyProgressBar />
      <TechnologyQuestion />
    </>
  )
}