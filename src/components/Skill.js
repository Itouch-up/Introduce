import React from "react";
import {useStaticQuery,graphql,Link} from "gatsby"
import Img from "gatsby-image"

const Skill = () =>{
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath:{eq:"2260339.png"}){
      childImageSharp{
        fluid(maxWidth:300){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  return (
    
    <div className="skill-blurb" id="skill">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>Skill</h3><br/>
            <div className="blocks">
              <Link to="https://www.w3schools.com">
              <div className="skills" id="html">
                <div className="text">HTML5/CSS3/JavaScript(ES6)<br/><br/>What are they?</div> 
              </div>
              </Link>
              <Link to="https://sass-lang.com/">
              <div className="skills" id="scss">
                <div className="text">SCSS<br/><br/>What is SCSS?</div> 
              </div>
              </Link>
              </div>
              <div className="blocks">
              <Link to="https://ko.reactjs.org/">
              <div className="skills" id="react">
                <div className="text">React.js<br/><br/>What is React.js?</div>
              </div>
              </Link>
              <Link to="https://www.gatsbyjs.com/">
              <div className="skills" id="gatsby">
                <div className="text">Gatsby.js<br/><br/>What is Gatsby.js?</div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skill