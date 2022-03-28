import * as React from "react"
import '../components/styles/style.css'

import Header from "../components/header"
import Banner from "../components/banner"
import About from "../components/aboutBlurb"
import Skill from "../components/Skill"
import Contact from "../components/contact"
const IndexPage = () => (
  <>
    <Header/>
    <Banner/>
    <About/>
    <Skill/>
    <Contact/>
  </>
)

export default IndexPage
