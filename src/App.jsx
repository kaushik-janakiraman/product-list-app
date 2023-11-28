/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Login from './components/login'
import { Route, Routes, useNavigate } from 'react-router-dom'
import MainContent from './components/mainContent/MainContent'

function App() {
  
  const { isLoggedIn } = useSelector(store => store.user)
  
  const navigate = useNavigate()

  useEffect(() => {
    if(!isLoggedIn) {
      navigate('/login')
    }
  }, [isLoggedIn])

  return (
    <React.Fragment>
      <Routes>
          <Route path='/login' element={<Login />}/>
      </Routes>  
      {isLoggedIn && <MainContent />}
    </React.Fragment>
  )
}

export default App
