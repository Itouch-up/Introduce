import React from "react";
import {useStaticQuery,graphql} from "gatsby"
import Img from "gatsby-image"

const Contact = () =>{
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
    <>
    <div className="contact" id="contact">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>Contact</h3>
            <p>
              Git : <a href="https://github.com/Itouch-up">Itouch-up</a><br/>
              Email : bsu414@gmail.com<br/>
              Discord : 박선우#2214<br/>
              Phone : 010-4080-1479<br/>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact