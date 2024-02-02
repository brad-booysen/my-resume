import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="portfolio" element={ <Portfolio/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  )
}

export default App
