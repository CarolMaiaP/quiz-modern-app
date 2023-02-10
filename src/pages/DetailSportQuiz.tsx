import { DetailBrief } from "../components/DetailBrief";
import { DetailHeader } from "../components/DetailHeader";
import { DetailRules } from "../components/DetailRules";
import { DetailSport } from "../components/DetailSport";
import { StartQuizButton } from "../components/StartQuizButton";

export function DetailSportQuiz(){
  return(
    <>
      <DetailHeader />
      <DetailSport />
      <DetailBrief />
      <DetailRules />
      <StartQuizButton />
    </>
  )
}