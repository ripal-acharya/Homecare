import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `1rem auto`, maxWidth: 1000, padding: `0 rem` }}>
    <header style={{ marginBottom: `2rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Homecare2go</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Search</ListLink>
        <ListLink to="//">Compare</ListLink>
        <ListLink to="//">Connect</ListLink>
      </ul>
    </header>
    {children}


  </div>
)