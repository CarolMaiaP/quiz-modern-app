import { Header } from "./components/Header"
import { RecentQuiz } from "./components/RecentQuiz"
import { Result } from "./components/Result"
import './styles/global.scss'

function App() {

  return (
    <div className="App">
      <Header />
      <Result />
      <RecentQuiz />
    </div>
  )
}

export default App
