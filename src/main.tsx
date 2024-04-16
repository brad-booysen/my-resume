import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Footer from './components/Footer.tsx'
import './index.css'
import TopNavBar from './components/TopNavBar.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <TopNavBar />
          <div style={{ flex: '1' }}>
              <App />
          </div>
          <Footer />
      </div>
  </BrowserRouter>,
)