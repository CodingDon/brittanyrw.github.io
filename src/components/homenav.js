
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
          <li>
            <Link to={`/whatthecss/`}>
              What the CSS?!
            </Link>
          </li>
          <li>
            <Link to={`/theaterlog/`}>
              TheaterLog
            </Link>
          </li>
          <li>
            <Link to={`/emojiscreen/`}>
              EmojiScreen
            </Link>
          </li>
          <li>
            <Link to={`/kdance/`}>
              K-Dance Crews
            </Link>
          </li>
          <li>
            <Link to={`/mapping-musicals/`}>
              Mapping Musicals
            </Link>
          </li>
          <li>
            <Link to={`/bittheater/`}>
              BitTheater
            </Link>
          </li>
          <li>
            <Link to={`/musicalpicks/`}>
              MusicalPicks
            </Link>
          </li>          
          <li>
            <Link to={`/css-images/`}>
              CSS Images
            </Link>
          </li>
          <li>
            <Link to={`/other-projects/`}>
              Other Projects
            </Link>
          </li>         
          <li>
            <Link to={`/teaching/`}>
              Teaching
            </Link>
          </li>
          <li>
            <Link to={`/blog/`}>
              Blog
            </Link>
          </li>          
          <li>
            <Link to={`/me/`}>
              Me
            </Link>
          </li>                  
        </ul>
      </nav>
    </div>
  )
}

export default HomeNav