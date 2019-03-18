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
        <Link to={`/`}>
          <h3>
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link
          to={`/about/`}>
          About
        </Link>
        <Link
          to={`/blog/`}>
          Blog
        </Link>
        {children}
      </div>
    )}
  />
)