import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import ProfileContainer from './components/profile-container.jsx'
import Menu  from './components/menu.jsx'
import Footer from './components/footer.jsx'
import './index.css'
import './css/style.css'

ReactDOM.createRoot(document.getElementById('navbar')).render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ProfileContainer />
    <Menu />
    <Footer />
  </React.StrictMode>,
)
