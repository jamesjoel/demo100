import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {
  let user = useSelector(state=>state.UserSlice);

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/user1">User1</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/user2">User2</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/user">User ({user.length})</NavLink>
        </li>
        
       
       
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Header