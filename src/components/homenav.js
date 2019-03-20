
import React from "react"
import { Link } from "gatsby"

function HomeNav() {
  return (
    <div>
      <nav style={{
            padding: `20px`,
          }}>
        <ul style={{
            listStyle: `none`,
          }}>
          <li><Link to={`/whatthecss/`} style={{
            margin: `10px`,
          }}>
        What the CSS?!
        </Link></li>
          <li><a href="">Theater<span>Log</span></a></li>
          <li><a href="">K-Dance Crews</a></li>
          <li><a href="">Emoji<span>Screen</span></a></li>
          <li><a href="">Musical<span>Picks</span></a></li>
          <li><a href="">Bit<span>Theater</span></a></li>
          <li><a href="">CSS Images</a></li>
          <li><a href="">Other Apps</a></li>          
          <li><a href="">Teaching</a></li>
          <li><a href="">Blog</a></li>          
          <li><a href="">Me</a></li>                  
        </ul>
      </nav>
    </div>
  )
}

export default HomeNav