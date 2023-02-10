import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DetailSportQuiz } from "./pages/DetailSportQuiz"
import { Home } from "./pages/Home"
import './styles/global.scss'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail-sport" element={<DetailSportQuiz />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
