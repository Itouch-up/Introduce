import * as React from "react"
import { Helmet } from "react-helmet"
import '../components/styles/style.css'

import Header from "../components/header"
import Banner from "../components/banner"
import About from "../components/aboutBlurb"
import Skill from "../components/Skill"
import Contact from "../components/contact"
const IndexPage = () => (
  <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Who Am I</title>
    </Helmet>
    <Header/>
    <Banner/>
    <About/>
    <Skill/>
    <Contact/>
  </>
)

export default IndexPage
