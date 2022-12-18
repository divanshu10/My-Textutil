
import React, {useState, toggleMode} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './style.css'

  function Navbar(props) {
    // const [myStyle, setMyStyle] = useState({
    //       color: 'black',
    //       backgroundColor: 'white'
    //   })
       
  
    //   const toggle = () => {
    //       if (myStyle.color === 'black') {
    //           setMyStyle({
    //               color: "white",
    //               backgroundColor: "black"
    //           })
    //           setBtnText("Enable light Mode")
    //       }
    
    return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>

            </ul>
          </div>
          <div className="switch">
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
          </div>
          </div>
        </div>
       
      </nav>
    )
  }
  Navbar.propTypes = {
    title: PropTypes.string
  }
  Navbar.defaultProps = {
    title: 'set title here' // it is used when not given title it takes by default from here
  }
 // }
export default Navbar