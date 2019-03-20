import React from "react"
import { graphql } from "gatsby"

import HomeNav from "../components/homenav"
import Layout from "../components/layout"

import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location}>
        <SEO title="Home" />
          <main>
            <HomeNav />
          </main>
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
