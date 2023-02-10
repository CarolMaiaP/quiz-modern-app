import { Header } from "../components/Header";
import { PopularQuiz } from "../components/PopularQuiz";
import { RecentQuiz } from "../components/RecentQuiz";
import { Result } from "../components/Result";

export function Home(){
  return(
    <>
      <Header />
      <Result />
      <RecentQuiz />
      <PopularQuiz />
    </>
  )
}