import { DetailBrief } from "../components/DetailBrief";
import { DetailHeader } from "../components/DetailHeader";
import { DetailRules } from "../components/DetailRules";
import { DetailTechnology } from "../components/DetailTechnology";
import { StartTechnologyQuizButton } from "../components/StartTechnologyQuizButton";

export function DetailTechnologyQuiz(){
  return(
    <>
      <DetailHeader />
      <DetailTechnology />
      <DetailBrief />
      <DetailRules />
      <StartTechnologyQuizButton />
    </>
  )
}