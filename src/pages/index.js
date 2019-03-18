import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Projects from "../components/projects"
import About from "../components/about"
import Footer from "../components/footer"

export default () => (
  <div>
    <Layout>
      <Header/>
      <main>
        <Projects/>
        <About/>
      </main>
      <Footer/>
      </Layout>
  </div>
)
