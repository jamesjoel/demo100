import React from 'react'
import Header from './components/Header'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import User1 from './pages/User1'
import User2 from './pages/User2'
import User from './pages/User'
import { useDispatch } from 'react-redux'
import { FetchData } from './redux/UserSlice'


const App = () => {
  let dispatch = useDispatch();
  dispatch(FetchData());
  return (
    <>
    <Header />
    <div className="container">
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='user1' element={<User1 />} />
        <Route path='user2' element={<User2 />} />
        <Route path='user' element={<User />} />
    </Routes>
    </div>
    </>
  )
}

export default App