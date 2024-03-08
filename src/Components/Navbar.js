import "./NavbarStyles.css";
import React, { Component } from 'react'
import { MenuItems } from "./Menu";


class Navbar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       clicked:false
    }
    
  }
  clickHandler=()=>{
    this.setState({
        clicked:!this.state.clicked
    })
}
  
  render() {
    return (
      <nav className={"NavbarItems"}>
        <h1 className="navbar-logo">Trippy</h1>

        <div className="menu-icons" onClick={this.clickHandler}>
          <i className={this.state.clicked ? "fas fa-times": "fas fa-bars" }></i>
        </div>
        <ul className={this.state.clicked?"nav-menu active":"nav-menu"} >
            {MenuItems.map((item, index)=>{
                return(
                  <li key={index}>
                    <a className={item.cName} href={item.url}>
                      <i className={item.icon}></i>{item.title}
                    </a>
                  </li>
                )
            })}
            
        <button>Sign Up</button>    
        </ul> 
      </nav>
    )
  }
}

export default Navbar