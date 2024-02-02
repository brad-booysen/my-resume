import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TopNavBar from './components/TopNavBar.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <TopNavBar />
    <App />
  </BrowserRouter>,
)
