import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faChalkboardUser, faHouse, faMessage, faUser } from "@fortawesome/free-solid-svg-icons"
// import { faServicestack } from '@fortawesome/free-brands-svg-icons'
import "./navbar.css"
import { useState } from 'react'

export default function Navbar() {

  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav("#")} className={activeNav === "#" ? "active" : ""} >
        <FontAwesomeIcon icon={faHouse} />
      </a>
      <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""} >
        <FontAwesomeIcon icon={faUser} />
      </a>
      <a href="#experience" onClick={()=> setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""} >
        <FontAwesomeIcon icon={faBook} />
      </a>
      <a href="#services" onClick={()=> setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}>
        <FontAwesomeIcon icon={faChalkboardUser} />
      </a>
      <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""} >
        <FontAwesomeIcon icon={faMessage} />
      </a>
    </nav>
  )
}
