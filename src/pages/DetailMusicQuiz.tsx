import { DetailBrief } from "../components/DetailBrief";
import { DetailHeader } from "../components/DetailHeader";
import { DetailMusic } from "../components/DetailMusic";
import { DetailRules } from "../components/DetailRules";
import { StartMusicQuizButton } from "../components/StartMusicQuizButton";

export function DetailMusicQuiz(){
  return(
    <>
      <DetailHeader />
      <DetailMusic />
      <DetailBrief />
      <DetailRules />
      <StartMusicQuizButton />
    </>
  )
}