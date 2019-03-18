import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Projects from "../components/projects"
import About from "../components/about"
import Footer from "../components/footer"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" />
          <Header/>
          <main>
          <Projects/>
          <About/>
          </main>
          <Footer/>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
