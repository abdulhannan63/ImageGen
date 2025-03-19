import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Home from './pages/Home'
import NavBar from './component/NavBar'
import Footer from './component/Footer'
import Login from './component/Login'
import Signup from './component/Signup'
import { AppContext } from './context/AppContext'
import { ToastContainer } from 'react-toastify';
const App = () => {
  const { ShowLogin,setShowLogin } = useContext(AppContext);

  return (
    <>
    
      <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <ToastContainer position='bottom-right' />
        <NavBar />
        {ShowLogin &&
        <Signup />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<BuyCredit />} />
          <Route path="/result" element={<Result />} />
          
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App