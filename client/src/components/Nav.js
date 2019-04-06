import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const NavList = (props) => {

      return(
         <div className="nav">
              <button onClick={props.logout}>Logout</button>
              <Link to="/Home">Home</Link>
              <Link to="/Test">Test1</Link>
              <Link to="/test2">Services</Link>
              <Link to="/test3">Contact</Link>
                
            
          </div>
      )
}

export default NavList