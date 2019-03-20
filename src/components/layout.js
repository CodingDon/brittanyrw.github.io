import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
}
    render={data => (
      <div style={{
            padding: `20px`,
          }}>
        <div style={{
            float: `right`,
          }}>
          <p>Brittany Walker</p>
          <p>Web Developer</p>
          </div>
        {children}
      </div>
    )}
  />
)


