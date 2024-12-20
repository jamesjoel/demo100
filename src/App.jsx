import React from 'react'
import Header from './components/Header'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import User1 from './pages/User1'
import User2 from './pages/User2'


const App = () => {
  return (
    <>
    <Header />
    <div className="container">
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='user1' element={<User1 />} />
        <Route path='user2' element={<User2 />} />
    </Routes>
    </div>
    </>
  )
}

export default App