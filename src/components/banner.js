import React from "react";
import {useStaticQuery,graphql} from "gatsby"
import Img from "gatsby-image"

const Banner = () =>{
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
    
    <div className="banner" id="banner">
      <div className="container">
        <div className="row">
          <div className="main-text">Who am I?</div>
          <div className="main-image">
            <Img fluid={data.placeholderImage.childImageSharp.fluid}/>
          </div>
        </div>
        <div className="scroll">
          <span>scroll down</span>
        </div>
      </div>
      <div className="fixed-misc">I'll introduce myself</div>
    </div>
  )
}

export default Banner