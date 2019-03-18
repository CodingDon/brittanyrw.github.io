import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Project from "../components/project"
import About from "../components/about"
import Footer from "../components/footer"
import { Link } from "gatsby"

export default () => (
  <div>
    <Layout>
      <Header/>
      <main>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <About/>
      </main>
      <Footer/>
      </Layout>
  </div>
)
