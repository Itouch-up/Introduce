import * as React from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <div onClick={()=>scrollTo('#banner')}><b>Who Am I?</b></div>
        </div>
        <div className="navigation">
          <nav>
            <div onClick={()=>scrollTo('#about')}><b>About</b></div>
            <div onClick={()=>scrollTo('#skill')}><b>Skill</b></div>
            <div onClick={()=>scrollTo('#contact')}><b>Contact</b></div>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
