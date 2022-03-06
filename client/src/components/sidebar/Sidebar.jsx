import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTable,faHome} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import logo from '../../images/logo.png'
import './Sidebar.css'

const Sidebar = ({history}) => {

  const logoutHandler=()=>{
    localStorage.removeItem("authToken")
    localStorage.removeItem("someRandomNumber")
    localStorage.removeItem("someName")
    history.push("/login")
  }
  return (
    <div className="admin">
      <div className="admin__container">
        <div className="admin__navigation">
          <ul>
            <li className="logoTitle">
            <Link to="/" className="link">
              <span className="admin__icon"><img src={logo} alt="digital experts" className="logo"/></span>
              <span className="admin__title" style={{color:"#f1962f"}}><h2>SMART<span style={{color:'white'}}>Q</span></h2></span>
              </Link>
            </li>

            <li>
            <Link to="/" className="link">
              <span className="admin__icon"><FontAwesomeIcon icon={faHome} /></span>
              <span className="admin__title">Main Course</span>
              </Link>
            </li>
            <li>
            <Link to="/users" className="link">
              <span className="admin__icon"><FontAwesomeIcon icon={faTable} /></span>
              <span className="admin__title">Snacks</span>
              </Link>
            </li>
            <li>
            <Link to="/infos" className="link">
              <span className="admin__icon"><FontAwesomeIcon icon={faTable} /></span>
              <span className="admin__title">Special Meals</span>
              </Link>
            </li>



            <li>
            <Link to="/password" className="link">
              <span className="admin__icon"><FontAwesomeIcon icon={faTable} /></span>
              <span className="admin__title">Desert</span>
              </Link>
            </li>

            <li>
            <Link to="/register" className="link">
              <span className="admin__icon"><FontAwesomeIcon icon={faTable} /></span>
              <span className="admin__title">Beverage</span>
              </Link>
            </li>

          </ul>
        </div>



      </div>
    </div>
  )
}

export default Sidebar
