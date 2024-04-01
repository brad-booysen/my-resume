import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import CloudChallenge from "./pages/CloudChallenge"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="portfolio" element={ <Portfolio /> } />
        <Route path="cloud-challenge" element={ <CloudChallenge /> } />
        <Route path="contact" element={ <Contact /> } />
      </Routes>
    </div>
  )
}

export default App
