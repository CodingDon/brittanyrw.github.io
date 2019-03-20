import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class WTCSSPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="What the CSS?! | Brittany Walker" />
        <h1>What the CSS?!</h1>
        
      </Layout>
    )
  }
}

export default WTCSSPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
