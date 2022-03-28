import React from "react";
import {useStaticQuery,graphql,Link} from "gatsby"
import Img from "gatsby-image"

const AboutBlurb = () =>{
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
    
    <div className="about-blurb" id="about">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>Profile</h3>
            <p>
              <b>안녕하세요. 웹 프론트엔드 개발자의 길을 걷고 있는 학생입니다.</b><br/>
              이름 : 박선우<br/>
              소속 : 광주소프트웨어마이스터고등학교(2020~)<br/>
              전공 : Web Front-End<br/>
            </p>
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.placeholderImage.childImageSharp.fluid}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutBlurb