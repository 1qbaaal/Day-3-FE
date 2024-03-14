import { Outlet } from 'react-router-dom'
// import './App.css'
import Navbar from './components/cores/Navbar/Navbar'
import Footer from './components/cores/Footer/Footer'

function App() {


  return (
    <>
      <Navbar />
      <div style={{minHeight:'100vh'}}>
      { <Outlet/> }
      </div>
      <Footer />
    </>
  )
}

export default App
