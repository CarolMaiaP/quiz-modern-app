import { DetailBrief } from "../components/DetailBrief";
import { DetailHeader } from "../components/DetailHeader";
import { DetailRules } from "../components/DetailRules";
import { DetailSport } from "../components/DetailSport";
import { StartSportQuizButton } from "../components/StartSportQuizButton";

export function DetailSportQuiz(){
  return(
    <>
      <DetailHeader />
      <DetailSport />
      <DetailBrief />
      <DetailRules />
      <StartSportQuizButton />
    </>
  )
}