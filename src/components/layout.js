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
          <Link to={`/`} style={{
            margin: `10px`,
          }}>
        Home
        </Link>
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


