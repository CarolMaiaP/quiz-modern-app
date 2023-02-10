import { Header } from "./components/Header"
import { PopularQuiz } from "./components/PopularQuiz"
import { RecentQuiz } from "./components/RecentQuiz"
import { Result } from "./components/Result"
import './styles/global.scss'

function App() {

  return (
    <div className="App">
      <Header />
      <Result />
      <RecentQuiz />
      <PopularQuiz />
    </div>
  )
}

export default App
