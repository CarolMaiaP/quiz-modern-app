import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DetailSportQuiz } from "./pages/DetailSportQuiz"
import { DetailTechnologyQuiz } from "./pages/DetailTechnologyQuiz"
import { Home } from "./pages/Home"
import './styles/global.scss'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail-sport" element={<DetailSportQuiz />} />
          <Route path="/detail-technology" element={<DetailTechnologyQuiz />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
