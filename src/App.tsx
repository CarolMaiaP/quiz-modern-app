import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DetailMusicQuiz } from "./pages/DetailMusicQuiz"
import { DetailSportQuiz } from "./pages/DetailSportQuiz"
import { DetailTechnologyQuiz } from "./pages/DetailTechnologyQuiz"
import { Home } from "./pages/Home"
import { MusicQuiz } from "./pages/MusicQuiz"
import { SportQuiz } from "./pages/SportQuiz"
import { TecnologyQuiz } from "./pages/TechnologyQuiz"
import './styles/global.scss'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail-sport" element={<DetailSportQuiz />} />
          <Route path="/detail-technology" element={<DetailTechnologyQuiz />} />
          <Route path="/detail-music" element={<DetailMusicQuiz />} />
          <Route path="/technology-quiz" element={<TecnologyQuiz />} />
          <Route path="/sport-quiz" element={<SportQuiz />} />
          <Route path="/music-quiz" element={<MusicQuiz />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
