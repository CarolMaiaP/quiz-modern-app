import { DetailBrief } from "../components/DetailBrief";
import { DetailHeader } from "../components/DetailHeader";
import { DetailMusic } from "../components/DetailMusic";
import { DetailRules } from "../components/DetailRules";

export function DetailMusicQuiz(){
  return(
    <>
      <DetailHeader />
      <DetailMusic />
      <DetailBrief />
      <DetailRules />
    </>
  )
}